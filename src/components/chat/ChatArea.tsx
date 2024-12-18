import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Conversation } from "./types";
import { FormEvent } from "react";

interface ChatAreaProps {
  conversation: Conversation;
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: (e: FormEvent) => void;
  formatTimestamp: (timestamp: string) => string;
}

export const ChatArea = ({
  conversation,
  newMessage,
  setNewMessage,
  handleSendMessage,
  formatTimestamp,
}: ChatAreaProps) => {
  return (
    <>
      <div className="p-4 border-b">
        <h3 className="font-semibold">{conversation.companyName}</h3>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {conversation.messages.map((message) => (
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
  );
};