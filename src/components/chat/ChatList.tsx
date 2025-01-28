import { Conversation } from "./types";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  return (
    <ScrollArea className="h-[calc(70vh-65px)]">
      <div className="space-y-1">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className={`w-full p-4 text-left hover:bg-accent transition-colors ${
              selectedConversation?.id === conversation.id ? "bg-accent" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{conversation.companyName}</span>
              <span className="text-xs text-muted-foreground">
                {formatTimestamp(conversation.timestamp)}
              </span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-sm text-muted-foreground line-clamp-1">
                {conversation.lastMessage}
              </p>
              {conversation.unread && (
                <div className="w-2 h-2 bg-primary rounded-full" />
              )}
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}