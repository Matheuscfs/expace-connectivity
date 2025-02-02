import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CheckoutAddressProps {
  onSubmit: (address: any) => void;
}

export function CheckoutAddress({ onSubmit }: CheckoutAddressProps) {
  const [address, setAddress] = useState({
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="street" className="text-sm font-medium">
            Rua
          </label>
          <Input
            id="street"
            value={address.street}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, street: e.target.value }))
            }
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="number" className="text-sm font-medium">
              Número
            </label>
            <Input
              id="number"
              value={address.number}
              onChange={(e) =>
                setAddress((prev) => ({ ...prev, number: e.target.value }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="complement" className="text-sm font-medium">
              Complemento
            </label>
            <Input
              id="complement"
              value={address.complement}
              onChange={(e) =>
                setAddress((prev) => ({ ...prev, complement: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="neighborhood" className="text-sm font-medium">
            Bairro
          </label>
          <Input
            id="neighborhood"
            value={address.neighborhood}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, neighborhood: e.target.value }))
            }
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium">
              Cidade
            </label>
            <Input
              id="city"
              value={address.city}
              onChange={(e) =>
                setAddress((prev) => ({ ...prev, city: e.target.value }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="state" className="text-sm font-medium">
              Estado
            </label>
            <Input
              id="state"
              value={address.state}
              onChange={(e) =>
                setAddress((prev) => ({ ...prev, state: e.target.value }))
              }
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="zipCode" className="text-sm font-medium">
            CEP
          </label>
          <Input
            id="zipCode"
            value={address.zipCode}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, zipCode: e.target.value }))
            }
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Continuar para Pagamento
        </Button>
      </form>
    </Card>
  );
}