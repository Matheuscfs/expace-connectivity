import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Conversation } from "./types";

interface ChatListProps {
  conversations: Conversation[];
  selectedConversation: Conversation | null;
  onSelectConversation: (conversation: Conversation) => void;
  formatTimestamp: (timestamp: string) => string;
}

export const ChatList = ({
  conversations,
  selectedConversation,
  onSelectConversation,
  formatTimestamp,
}: ChatListProps) => {
  return (
    <ScrollArea className="h-[calc(70vh-65px)]">
      <div className="p-4 space-y-4">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
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
  );
};