
export interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: "user" | "company";
}

export interface Conversation {
  id: string;
  companyName: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: Message[];
}
