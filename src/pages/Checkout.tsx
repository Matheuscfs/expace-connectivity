
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
import { supabase } from "@/integrations/supabase/client";

const steps = [
  { id: 1, name: "Endereço", description: "Confirme o endereço de entrega" },
  { id: 2, name: "Pagamento", description: "Escolha a forma de pagamento" },
  { id: 3, name: "Revisão", description: "Revise seu pedido" },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState<any>({
    address: null,
    payment: null,
    items: [],
    total: 0,
  });
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Check authentication
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login');
        return;
      }
      setSession(session);

      // Load checkout items
      const checkoutData = localStorage.getItem('checkoutItems');
      if (checkoutData) {
        const { items, total } = JSON.parse(checkoutData);
        setOrderData(prev => ({ ...prev, items, total }));
      } else {
        navigate('/');
      }
    });
  }, [navigate]);

  const handleAddressSubmit = (address: any) => {
    setOrderData((prev: any) => ({ ...prev, address }));
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (payment: any) => {
    setOrderData((prev: any) => ({ ...prev, payment }));
    setCurrentStep(3);
  };

  const handleOrderSubmit = async () => {
    try {
      if (!session?.user?.id) {
        throw new Error("User not authenticated");
      }

      // Create order in database
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_id: session.user.id,
          provider_id: orderData.items[0].providerId, // Assuming all items are from the same provider
          service_id: orderData.items[0].id,
          total_amount: orderData.total,
          payment_status: 'pending',
          status: 'pending',
          notes: orderData.items[0].customizations?.notes || null,
          scheduled_date: orderData.items[0].scheduledDate || null
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create payment record
      const { error: paymentError } = await supabase
        .from('payments')
        .insert({
          order_id: order.id,
          amount: orderData.total,
          payment_method: orderData.payment.method,
          status: 'pending',
          payment_details: {
            method: orderData.payment.method,
            ...orderData.payment.details
          }
        });

      if (paymentError) throw paymentError;

      // Clear cart after successful order
      localStorage.removeItem('cartItems');
      localStorage.removeItem('checkoutItems');

      toast({
        title: "Pedido realizado com sucesso!",
        description: "Você receberá um email com os detalhes do pedido.",
      });
      
      navigate("/orders");
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "Erro ao processar pedido",
        description: error.message || "Por favor, tente novamente.",
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
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Resumo do Pedido</h3>
            <Separator className="my-4" />
            <div className="space-y-4">
              {orderData.items.map((item: any) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>
                    {item.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
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
