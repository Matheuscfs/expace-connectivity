
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChatList } from "./chat/ChatList";
import { ChatArea } from "./chat/ChatArea";
import { Conversation, Message } from "./chat/types";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface ChatButtonProps {
  companyId?: string;
}

const ChatButton = ({ companyId }: ChatButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchConversations();
      subscribeToMessages();
    }
  }, [user]);

  const fetchConversations = async () => {
    try {
      const { data: conversationsData, error } = await supabase
        .from('conversations')
        .select(`
          *,
          company:companies!inner(
            name,
            logo
          ),
          messages (
            *
          )
        `)
        .eq('user_id', user?.id)
        .order('updated_at', { ascending: false });

      if (error) throw error;

      if (conversationsData) {
        const typedConversations: Conversation[] = conversationsData.map(conv => ({
          ...conv,
          company: {
            name: conv.company.name,
            logo: conv.company.logo || undefined
          },
          messages: conv.messages || []
        }));
        setConversations(typedConversations);
      }
    } catch (error: any) {
      console.error('Error fetching conversations:', error);
      toast({
        title: "Erro ao carregar conversas",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const subscribeToMessages = () => {
    const channel = supabase
      .channel('chat_updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setConversations(prevConversations => 
            prevConversations.map(conv => {
              if (conv.id === newMessage.conversation_id) {
                return {
                  ...conv,
                  messages: [...(conv.messages || []), newMessage],
                };
              }
              return conv;
            })
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const createConversation = async (companyId: string) => {
    try {
      const { data, error } = await supabase
        .from('conversations')
        .insert([
          {
            company_id: companyId,
            user_id: user?.id,
          },
        ])
        .select(`
          *,
          company:companies!inner(
            name,
            logo
          )
        `)
        .single();

      if (error) throw error;

      // Initialize the conversation with an empty messages array
      const newConversation: Conversation = {
        ...data,
        company: {
          name: data.company.name,
          logo: data.company.logo || undefined
        },
        messages: []
      };

      return newConversation;
    } catch (error: any) {
      console.error('Error creating conversation:', error);
      toast({
        title: "Erro ao criar conversa",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    try {
      let currentConversation = selectedConversation;

      // If companyId is provided and no conversation exists, create one
      if (companyId && !currentConversation) {
        const newConversation = await createConversation(companyId);
        if (!newConversation) return;
        currentConversation = newConversation;
        setSelectedConversation(newConversation);
      }

      const { error } = await supabase
        .from('messages')
        .insert([
          {
            conversation_id: currentConversation.id,
            content: newMessage,
            sender_id: user?.id,
          },
        ]);

      if (error) throw error;

      setNewMessage("");
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleOpenChat = async () => {
    if (!user) {
      toast({
        title: "Login necessário",
        description: "Faça login para enviar mensagens",
      });
      navigate("/login");
      return;
    }

    if (companyId) {
      // Check if conversation already exists
      const existingConversation = conversations.find(
        (conv) => conv.company_id === companyId
      );

      if (existingConversation) {
        setSelectedConversation(existingConversation);
      } else {
        const newConversation = await createConversation(companyId);
        if (newConversation) {
          setSelectedConversation(newConversation);
          setConversations([newConversation, ...conversations]);
        }
      }
    }

    setIsOpen(true);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const unreadCount = conversations.reduce(
    (count, conv) => count + (conv.messages?.filter((msg) => !msg.read && msg.sender_id !== user?.id).length || 0),
    0
  );

  return (
    <>
      <button
        onClick={handleOpenChat}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-colors group"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full"
          >
            {unreadCount}
          </Badge>
        )}
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[80vw] sm:h-[70vh] p-0">
          <div className="flex h-full">
            <div className="w-full sm:w-[30%] border-r">
              <DialogHeader className="p-4 border-b">
                <DialogTitle>Suas Conversas</DialogTitle>
              </DialogHeader>
              <ChatList
                conversations={conversations}
                selectedConversation={selectedConversation}
                onSelectConversation={setSelectedConversation}
                formatTimestamp={formatTimestamp}
              />
            </div>

            <div className="hidden sm:flex flex-col w-[70%] h-full">
              {selectedConversation ? (
                <ChatArea
                  conversation={selectedConversation}
                  newMessage={newMessage}
                  setNewMessage={setNewMessage}
                  handleSendMessage={handleSendMessage}
                  formatTimestamp={formatTimestamp}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Selecione uma conversa para começar
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatButton;
