import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { 
  sendOrderConfirmation, 
  sendPaymentConfirmation,
  notifySellerNewOrder 
} from "@/utils/notificationUtils";

interface CheckoutReviewProps {
  orderData: any;
  onSubmit: () => void;
}

export function CheckoutReview({ orderData, onSubmit }: CheckoutReviewProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      toast({
        title: "Termos não aceitos",
        description: "Por favor, aceite os termos para continuar",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Process notifications
      await Promise.all([
        sendOrderConfirmation(orderData),
        sendPaymentConfirmation(orderData.payment),
        notifySellerNewOrder(orderData)
      ]);
      
      onSubmit();
    } catch (error) {
      console.error("Error processing order:", error);
      toast({
        title: "Erro no Processamento",
        description: "Houve um erro ao finalizar seu pedido. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Endereço de Entrega</h3>
          <p className="text-sm text-muted-foreground mt-2">
            {orderData.address?.street}, {orderData.address?.number}
            {orderData.address?.complement && `, ${orderData.address.complement}`}
            <br />
            {orderData.address?.neighborhood}
            <br />
            {orderData.address?.city}, {orderData.address?.state}
            <br />
            CEP: {orderData.address?.zipCode}
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold">Método de Pagamento</h3>
          <p className="text-sm text-muted-foreground mt-2">
            {orderData.payment?.method === "credit" && "Cartão de Crédito"}
            {orderData.payment?.method === "debit" && "Cartão de Débito"}
            {orderData.payment?.method === "pix" && "PIX"}
            {(orderData.payment?.method === "credit" ||
              orderData.payment?.method === "debit") && (
              <>
                <br />
                Cartão terminado em{" "}
                {orderData.payment?.cardNumber.slice(-4)}
              </>
            )}
          </p>
        </div>

        <Separator />

        <div className="flex items-start space-x-2">
          <Checkbox 
            id="terms" 
            checked={termsAccepted}
            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Li e aceito os termos de serviço e a política de privacidade
          </label>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting || !termsAccepted}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processando...
            </>
          ) : (
            "Confirmar Pedido"
          )}
        </Button>
      </form>
    </Card>
  );
}