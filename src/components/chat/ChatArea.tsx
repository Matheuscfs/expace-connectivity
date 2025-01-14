import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Message } from "./types";

interface ChatAreaProps {
  messages: Message[];
  company?: {
    id: number;
    name: string;
    logo: string;
    category: string;
    isOnline?: boolean;
  };
  onSendMessage?: (message: string) => void;
}

export function ChatArea({ messages, company, onSendMessage }: ChatAreaProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("message") as HTMLInputElement;
    
    if (input.value.trim() && onSendMessage) {
      onSendMessage(input.value);
      input.value = "";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        {company ? (
          <div className="flex items-center space-x-4">
            <img
              src={company.logo}
              alt={company.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{company.name}</h3>
                <Badge variant={company.isOnline ? "success" : "secondary"} className="text-xs">
                  {company.isOnline ? "Online" : "Offline"}
                </Badge>
              </div>
              <p className="text-sm text-gray-500">{company.category}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Selecione uma conversa</p>
        )}
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p>{message.content}</p>
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
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