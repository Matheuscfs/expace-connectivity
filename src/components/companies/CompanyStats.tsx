import { Card, CardContent } from "@/components/ui/card";
import { Building2, HandshakeIcon, TruckIcon } from "lucide-react";

export function CompanyStats() {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          O Poder do Nosso Ecossistema
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Building2 className="w-12 h-12 mx-auto text-primary mb-4" />
              <div className="text-3xl font-bold mb-2">5000+</div>
              <p className="text-gray-600">Empresas Cadastradas</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <HandshakeIcon className="w-12 h-12 mx-auto text-primary mb-4" />
              <div className="text-3xl font-bold mb-2">15000+</div>
              <p className="text-gray-600">Parcerias Fechadas</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <TruckIcon className="w-12 h-12 mx-auto text-primary mb-4" />
              <div className="text-3xl font-bold mb-2">R$ 10M+</div>
              <p className="text-gray-600">Economia em Fretes</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}