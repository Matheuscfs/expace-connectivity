import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Conversation } from "./types";

interface ChatAreaProps {
  conversation: Conversation;
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  formatTimestamp: (timestamp: string) => string;
}

export function ChatArea({ 
  conversation,
  newMessage,
  setNewMessage,
  handleSendMessage,
  formatTimestamp 
}: ChatAreaProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-200" /> {/* Placeholder for company logo */}
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold">{conversation.companyName}</h3>
              <Badge variant="secondary" className="text-xs">
                Online
              </Badge>
            </div>
            <p className="text-sm text-gray-500">Serviços Gerais</p> {/* Placeholder category */}
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {conversation.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p>{message.content}</p>
                <span className="text-xs opacity-70">
                  {formatTimestamp(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            name="message"
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}