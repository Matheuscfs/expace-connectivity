import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { validatePaymentInfo, processPayment } from "@/utils/paymentUtils";

interface CheckoutPaymentProps {
  onSubmit: (payment: any) => void;
}

export function CheckoutPayment({ onSubmit }: CheckoutPaymentProps) {
  const [payment, setPayment] = useState({
    method: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePaymentInfo(payment)) {
      toast({
        title: "Erro de Validação",
        description: "Por favor, verifique os dados do pagamento",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      const result = await processPayment(payment, {});
      if (result.success) {
        toast({
          title: "Pagamento Processado",
          description: "Seu pagamento foi processado com sucesso",
        });
        onSubmit({ ...payment, transactionId: result.transactionId });
      }
    } catch (error) {
      toast({
        title: "Erro no Pagamento",
        description: "Não foi possível processar seu pagamento. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Método de Pagamento</label>
          <Select
            value={payment.method}
            onValueChange={(value) =>
              setPayment((prev) => ({ ...prev, method: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione o método de pagamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="credit">Cartão de Crédito</SelectItem>
              <SelectItem value="debit">Cartão de Débito</SelectItem>
              <SelectItem value="pix">PIX</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {(payment.method === "credit" || payment.method === "debit") && (
          <>
            <div className="space-y-2">
              <label htmlFor="cardNumber" className="text-sm font-medium">
                Número do Cartão
              </label>
              <Input
                id="cardNumber"
                value={payment.cardNumber}
                onChange={(e) =>
                  setPayment((prev) => ({ ...prev, cardNumber: e.target.value }))
                }
                maxLength={19}
                placeholder="0000 0000 0000 0000"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cardName" className="text-sm font-medium">
                Nome no Cartão
              </label>
              <Input
                id="cardName"
                value={payment.cardName}
                onChange={(e) =>
                  setPayment((prev) => ({ ...prev, cardName: e.target.value }))
                }
                placeholder="Nome como está no cartão"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="expiryDate" className="text-sm font-medium">
                  Data de Validade
                </label>
                <Input
                  id="expiryDate"
                  value={payment.expiryDate}
                  onChange={(e) =>
                    setPayment((prev) => ({
                      ...prev,
                      expiryDate: e.target.value,
                    }))
                  }
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cvv" className="text-sm font-medium">
                  CVV
                </label>
                <Input
                  id="cvv"
                  value={payment.cvv}
                  onChange={(e) =>
                    setPayment((prev) => ({ ...prev, cvv: e.target.value }))
                  }
                  type="password"
                  maxLength={4}
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </>
        )}

        {payment.method === "pix" && (
          <div className="text-center p-4">
            <p className="text-sm text-muted-foreground">
              Você receberá um QR Code para pagamento após confirmar o pedido
            </p>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processando...
            </>
          ) : (
            "Continuar para Revisão"
          )}
        </Button>
      </form>
    </Card>
  );
}