import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Plus, Minus, ShoppingCart } from "lucide-react";

interface ServiceCustomizationProps {
  serviceId?: string;
}

export function ServiceCustomization({ serviceId }: ServiceCustomizationProps) {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  // Mock data - replace with actual data fetching
  const service = {
    name: "Consultoria em TI",
    price: 299.99,
    addons: [
      { id: 1, name: "Relatório Detalhado", price: 99.99 },
      { id: 2, name: "Suporte Estendido", price: 149.99 },
    ],
  };

  const handleAddToCart = () => {
    toast({
      title: "Serviço adicionado ao carrinho",
      description: `${quantity}x ${service.name} foi adicionado ao seu carrinho.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalizar Serviço</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Quantidade</h4>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 text-center"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Complementos</h4>
          <div className="space-y-2">
            {service.addons.map((addon) => (
              <div key={addon.id} className="flex items-center justify-between">
                <span className="text-sm">{addon.name}</span>
                <Button variant="outline" size="sm">
                  Adicionar +{addon.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium mb-2">Observações</h4>
          <Textarea
            placeholder="Adicione observações ou requisitos especiais..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span className="font-medium">
              {(service.price * quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <Button className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}