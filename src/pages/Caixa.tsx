import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SaleItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export default function Caixa() {
  const [items, setItems] = useState<SaleItem[]>([]);
  const [total, setTotal] = useState(0);
  const [productCode, setProductCode] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + item.total, 0);
    setTotal(newTotal);
  }, [items]);

  const handleAddItem = () => {
    // Mock product lookup based on code
    // In a real app, this would query a product database
    const mockProduct = {
      id: productCode,
      name: `Produto ${productCode}`,
      price: Math.random() * 100 + 10,
    };

    setItems(prev => [
      ...prev,
      {
        id: mockProduct.id,
        name: mockProduct.name,
        quantity: 1,
        price: mockProduct.price,
        total: mockProduct.price
      }
    ]);

    setProductCode("");
    
    toast({
      title: "Produto adicionado",
      description: "Item adicionado ao carrinho com sucesso.",
    });
  };

  const handleFinalizeSale = () => {
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens antes de finalizar a venda.",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with payment processing
    toast({
      title: "Venda finalizada",
      description: `Total: ${total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}`,
    });

    setItems([]);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <Card className="p-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Caixa</h2>
          
          <div className="flex gap-4">
            <Input
              placeholder="Código do produto"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && productCode) {
                  handleAddItem();
                }
              }}
            />
            <Button 
              onClick={handleAddItem}
              disabled={!productCode}
            >
              Adicionar
            </Button>
          </div>

          <Separator />

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Preço Unit.</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    {item.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </TableCell>
                  <TableCell>
                    {item.total.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              Total: {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </div>
            <Button 
              size="lg"
              onClick={handleFinalizeSale}
              disabled={items.length === 0}
            >
              Finalizar Venda
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}