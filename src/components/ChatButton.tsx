import { MessageCircle } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Conversation {
  id: string;
  companyName: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

// Mock data - replace with real data later
const mockConversations: Conversation[] = [
  {
    id: "1",
    companyName: "Tech Solutions Ltd",
    lastMessage: "Obrigado pelo seu contato! Como posso ajudar?",
    timestamp: "2024-03-10T14:30:00",
    unread: true,
  },
  {
    id: "2",
    companyName: "Design Masters",
    lastMessage: "Seu projeto está em andamento...",
    timestamp: "2024-03-10T13:15:00",
    unread: false,
  },
  {
    id: "3",
    companyName: "Marketing Pro",
    lastMessage: "Podemos agendar uma reunião?",
    timestamp: "2024-03-10T11:45:00",
    unread: true,
  },
];

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = mockConversations.filter((conv) => conv.unread).length;

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Suas Conversas</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px] w-full pr-4">
            <div className="space-y-4">
              {mockConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{conversation.companyName}</h4>
                    <span className="text-xs text-muted-foreground">
                      {formatTimestamp(conversation.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {conversation.lastMessage}
                  </p>
                  {conversation.unread && (
                    <Badge variant="secondary" className="mt-2">
                      Nova mensagem
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatButton;