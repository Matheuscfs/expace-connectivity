import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(payment);
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

        <Button type="submit" className="w-full">
          Continuar para Revisão
        </Button>
      </form>
    </Card>
  );
}