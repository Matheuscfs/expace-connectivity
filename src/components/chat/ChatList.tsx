
import { Conversation } from "./types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/contexts/AuthContext";

interface ChatListProps {
  conversations: Conversation[];
  selectedConversation: Conversation | null;
  onSelectConversation: (conversation: Conversation) => void;
  formatTimestamp: (timestamp: string) => string;
}

export function ChatList({
  conversations,
  selectedConversation,
  onSelectConversation,
  formatTimestamp,
}: ChatListProps) {
  const { user } = useAuth();

  return (
    <ScrollArea className="h-[calc(70vh-65px)]">
      <div className="space-y-1">
        {conversations.map((conversation) => {
          const lastMessage = conversation.messages?.[conversation.messages.length - 1];
          const unreadCount = conversation.messages?.filter(
            (msg) => !msg.read && msg.sender_id !== user?.id
          ).length || 0;

          return (
            <button
              key={conversation.id}
              onClick={() => onSelectConversation(conversation)}
              className={`w-full p-4 text-left hover:bg-accent transition-colors ${
                selectedConversation?.id === conversation.id ? "bg-accent" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {conversation.company?.name || 'Empresa'}
                </span>
                <span className="text-xs text-muted-foreground">
                  {lastMessage && formatTimestamp(lastMessage.created_at)}
                </span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {lastMessage?.content || 'Nenhuma mensagem'}
                </p>
                {unreadCount > 0 && (
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-white">
                    {unreadCount}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </ScrollArea>
  );
}
