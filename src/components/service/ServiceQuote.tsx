import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface ServiceQuoteProps {
  serviceId?: string;
}

export function ServiceQuote({ serviceId }: ServiceQuoteProps) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada",
      description: "Em breve entraremos em contato com seu orçamento.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Solicitar Orçamento</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium">
              Telefone
            </label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-sm font-medium">
              Descrição do Serviço
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva suas necessidades específicas..."
              required
            />
          </div>

          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Solicitar Orçamento
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}