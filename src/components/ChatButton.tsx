import { MessageCircle } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChatList } from "./chat/ChatList";
import { ChatArea } from "./chat/ChatArea";
import { Conversation } from "./chat/types";

// Mock data - replace with real data later
const mockConversations: Conversation[] = [
  {
    id: "1",
    companyName: "Tech Solutions Ltd",
    lastMessage: "Obrigado pelo seu contato! Como posso ajudar?",
    timestamp: "2024-03-10T14:30:00",
    unread: true,
    messages: [
      {
        id: "m1",
        content: "Olá! Gostaria de saber mais sobre seus serviços.",
        timestamp: "2024-03-10T14:25:00",
        sender: "user",
      },
      {
        id: "m2",
        content: "Obrigado pelo seu contato! Como posso ajudar?",
        timestamp: "2024-03-10T14:30:00",
        sender: "company",
      },
    ],
  },
  {
    id: "2",
    companyName: "Design Masters",
    lastMessage: "Seu projeto está em andamento...",
    timestamp: "2024-03-10T13:15:00",
    unread: false,
    messages: [
      {
        id: "m3",
        content: "Preciso de um orçamento para design de logo.",
        timestamp: "2024-03-10T13:10:00",
        sender: "user",
      },
      {
        id: "m4",
        content: "Seu projeto está em andamento...",
        timestamp: "2024-03-10T13:15:00",
        sender: "company",
      },
    ],
  },
  {
    id: "3",
    companyName: "Marketing Pro",
    lastMessage: "Podemos agendar uma reunião?",
    timestamp: "2024-03-10T11:45:00",
    unread: true,
    messages: [
      {
        id: "m5",
        content: "Quais são os horários disponíveis para reunião?",
        timestamp: "2024-03-10T11:40:00",
        sender: "user",
      },
      {
        id: "m6",
        content: "Podemos agendar uma reunião?",
        timestamp: "2024-03-10T11:45:00",
        sender: "company",
      },
    ],
  },
];

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const unreadCount = mockConversations.filter((conv) => conv.unread).length;

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    // In a real app, this would send the message to the backend
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
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
            {/* Conversations List */}
            <div className="w-full sm:w-[30%] border-r">
              <DialogHeader className="p-4 border-b">
                <DialogTitle>Suas Conversas</DialogTitle>
              </DialogHeader>
              <ChatList
                conversations={mockConversations}
                selectedConversation={selectedConversation}
                onSelectConversation={setSelectedConversation}
                formatTimestamp={formatTimestamp}
              />
            </div>

            {/* Chat Area */}
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