import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckoutReviewProps {
  orderData: any;
  onSubmit: () => void;
}

export function CheckoutReview({ orderData, onSubmit }: CheckoutReviewProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
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
          <Checkbox id="terms" required />
          <label
            htmlFor="terms"
            className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Li e aceito os termos de serviço e a política de privacidade
          </label>
        </div>

        <Button type="submit" className="w-full">
          Confirmar Pedido
        </Button>
      </form>
    </Card>
  );
}