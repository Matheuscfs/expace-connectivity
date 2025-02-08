
import { useState, useEffect } from "react";
import { ShoppingCart, X, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  company: string;
  scheduledDate?: string;
  customizations?: Record<string, any>;
}

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [items, setItems] = useState<CartItem[]>([]);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Check auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Load cart items
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }

    return () => subscription.unsubscribe();
  }, []);

  const removeItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    toast({
      title: "Item removido",
      description: "O serviço foi removido do carrinho.",
    });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!session) {
      toast({
        title: "Login necessário",
        description: "Faça login para continuar com a compra.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione serviços ao carrinho antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    // Store cart items in localStorage for checkout page
    localStorage.setItem('checkoutItems', JSON.stringify({
      items,
      total
    }));
    
    navigate('/checkout');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
            >
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pb-6 border-b">
          <SheetTitle className="text-2xl font-bold">Carrinho</SheetTitle>
          <p className="text-sm text-muted-foreground">
            {items.length} {items.length === 1 ? "serviço" : "serviços"} no seu carrinho
          </p>
        </SheetHeader>
        <div className="mt-8 flex h-[calc(100vh-12rem)] flex-col">
          <ScrollArea className="flex-1 pr-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                <ShoppingCart className="h-12 w-12 text-muted-foreground/50" />
                <p className="text-lg font-medium text-muted-foreground">
                  Seu carrinho está vazio
                </p>
                <p className="text-sm text-muted-foreground">
                  Adicione alguns serviços para começar
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start space-x-4 bg-accent/30 p-4 rounded-lg"
                  >
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium text-base">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.company}
                      </p>
                      {item.scheduledDate && (
                        <p className="text-sm text-muted-foreground">
                          Agendado para: {new Date(item.scheduledDate).toLocaleDateString()}
                        </p>
                      )}
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-medium">
                        {(item.price * item.quantity).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                        {item.quantity > 1 ? " cada" : ""}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 mt-2"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
          {items.length > 0 && (
            <div className="space-y-4 pt-6 border-t mt-6">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">Subtotal</span>
                  <span className="text-base">
                    {total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-sm">Taxa de serviço</span>
                  <span className="text-sm">Grátis</span>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">
                    {total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
              <Button 
                className="w-full h-11 text-base font-medium"
                onClick={handleCheckout}
              >
                Finalizar Compra
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
