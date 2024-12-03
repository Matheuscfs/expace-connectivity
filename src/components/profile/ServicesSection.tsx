import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const ServicesSection = ({ user }: { user: any }) => {
  const services = user.services || [];

  return (
    <Card className="p-4">
      <h3 className="font-medium mb-4">Meus Serviços</h3>
      <div className="space-y-4">
        {services.map((service: any, index: number) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">{service.name}</h4>
              <p className="text-sm text-gray-600">{service.company}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant={service.status === "Em andamento" ? "secondary" : "default"}>
                  {service.status}
                </Badge>
                {service.rating ? (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{service.rating}</span>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">Aguardando avaliação</span>
                )}
              </div>
            </div>
            <Button variant="outline" size="sm">Ver detalhes</Button>
          </div>
        ))}
        {services.length === 0 && (
          <p className="text-sm text-gray-500">Nenhum serviço contratado</p>
        )}
      </div>
    </Card>
  );
};