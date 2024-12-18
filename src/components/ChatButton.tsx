import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: "user" | "company";
}

interface Conversation {
  id: string;
  companyName: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: Message[];
}

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
              <ScrollArea className="h-[calc(70vh-65px)]">
                <div className="p-4 space-y-4">
                  {mockConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation)}
                      className={cn(
                        "p-4 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer",
                        selectedConversation?.id === conversation.id && "bg-accent"
                      )}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{conversation.companyName}</h4>
                          {conversation.unread && (
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {formatTimestamp(conversation.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Chat Area */}
            <div className="hidden sm:flex flex-col w-[70%] h-full">
              {selectedConversation ? (
                <>
                  <div className="p-4 border-b">
                    <h3 className="font-semibold">{selectedConversation.companyName}</h3>
                  </div>
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {selectedConversation.messages.map((message) => (
                        <div
                          key={message.id}
                          className={cn(
                            "flex flex-col max-w-[70%] space-y-1",
                            message.sender === "user" ? "ml-auto items-end" : "items-start"
                          )}
                        >
                          <div
                            className={cn(
                              "rounded-lg p-3",
                              message.sender === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-accent"
                            )}
                          >
                            {message.content}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {formatTimestamp(message.timestamp)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      className="flex-1"
                    />
                    <Button type="submit" size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </>
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