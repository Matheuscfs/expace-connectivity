import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckoutAddress } from "@/components/checkout/CheckoutAddress";
import { CheckoutPayment } from "@/components/checkout/CheckoutPayment";
import { CheckoutReview } from "@/components/checkout/CheckoutReview";
import { Steps } from "@/components/checkout/Steps";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, name: "Endereço", description: "Confirme o endereço de entrega" },
  { id: 2, name: "Pagamento", description: "Escolha a forma de pagamento" },
  { id: 3, name: "Revisão", description: "Revise seu pedido" },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    address: null,
    payment: null,
    items: [],
    total: 0,
  });

  const handleAddressSubmit = (address: any) => {
    setOrderData((prev) => ({ ...prev, address }));
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (payment: any) => {
    setOrderData((prev) => ({ ...prev, payment }));
    setCurrentStep(3);
  };

  const handleOrderSubmit = async () => {
    try {
      // Here we would integrate with a payment gateway and create the order
      toast({
        title: "Pedido realizado com sucesso!",
        description: "Você receberá um email com os detalhes do pedido.",
      });
      // Clear cart after successful order
      localStorage.removeItem('cartItems');
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
      <Steps steps={steps} currentStep={currentStep} />
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
                  <span>{item.price}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{orderData.total}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;