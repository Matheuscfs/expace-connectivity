
export interface Message {
  id: string;
  content: string;
  created_at: string;
  sender_id: string;
  conversation_id: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  company_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  messages: Message[];
  company?: {
    name: string;
    logo?: string;
  };
}
