import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckoutAddress } from "@/components/checkout/CheckoutAddress";
import { CheckoutPayment } from "@/components/checkout/CheckoutPayment";
import { CheckoutReview } from "@/components/checkout/CheckoutReview";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { useToast } from "@/hooks/use-toast";
import { CartItem } from "@/types/marketplace";

const steps = [
  { id: 1, name: "Endereço", description: "Confirme o endereço de entrega" },
  { id: 2, name: "Pagamento", description: "Escolha a forma de pagamento" },
  { id: 3, name: "Revisão", description: "Revise seu pedido" },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderData, setOrderData] = useState({
    address: null,
    payment: null,
    items: [],
    total: 0,
  });

  useEffect(() => {
    // Load cart items from localStorage
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      const items = JSON.parse(storedItems);
      setCartItems(items);
      setOrderData(prev => ({
        ...prev,
        items: items,
        total: items.reduce((acc: number, item: CartItem) => acc + (item.price * item.quantity), 0)
      }));
    } else {
      // Redirect to home if cart is empty
      navigate('/');
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao carrinho para continuar.",
        variant: "destructive",
      });
    }
  }, [navigate, toast]);

  const handleAddressSubmit = (address: any) => {
    setOrderData((prev) => ({ ...prev, address }));
    setCurrentStep(2);
    toast({
      title: "Endereço confirmado",
      description: "Prossiga com o método de pagamento.",
    });
  };

  const handlePaymentSubmit = (payment: any) => {
    setOrderData((prev) => ({ ...prev, payment }));
    setCurrentStep(3);
    toast({
      title: "Pagamento selecionado",
      description: "Revise seu pedido para finalizar.",
    });
  };

  const handleOrderSubmit = async () => {
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear cart after successful order
      localStorage.removeItem('cartItems');
      
      toast({
        title: "Pedido realizado com sucesso!",
        description: "Você receberá um email com os detalhes do pedido.",
      });
      
      navigate("/orders");
    } catch (error) {
      toast({
        title: "Erro ao processar pedido",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <CheckoutSteps steps={steps} currentStep={currentStep} />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {currentStep === 1 && (
            <CheckoutAddress onSubmit={handleAddressSubmit} />
          )}
          {currentStep === 2 && (
            <CheckoutPayment onSubmit={handlePaymentSubmit} />
          )}
          {currentStep === 3 && (
            <CheckoutReview orderData={orderData} onSubmit={handleOrderSubmit} />
          )}
        </div>
        
        <div>
          <Card className="p-6 sticky top-24">
            <h3 className="text-lg font-semibold">Resumo do Pedido</h3>
            <Separator className="my-4" />
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.productId} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.quantity}x {item.productId}</p>
                    {item.customizations && (
                      <p className="text-sm text-muted-foreground">
                        {Object.entries(item.customizations)
                          .map(([key, value]) => `${key}: ${value}`)
                          .join(', ')}
                      </p>
                    )}
                  </div>
                  <p className="font-medium">
                    {(item.price * item.quantity).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </p>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>
                  {orderData.total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;