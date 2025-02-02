import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, FileText, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  duration?: string;
  image?: string;
}

interface CompanyServicesProps {
  companyId?: string;
}

export function CompanyServices({ companyId }: CompanyServicesProps) {
  const { toast } = useToast();

  // Mock services data - replace with actual API call
  const services: Service[] = [
    {
      id: "1",
      name: "Consultoria em TI",
      description: "Consultoria especializada em infraestrutura e segurança de TI",
      price: 299.99,
      rating: 4.8,
      category: "Tecnologia",
      duration: "2 horas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      id: "2",
      name: "Desenvolvimento Web",
      description: "Desenvolvimento de sites e aplicações web responsivas",
      price: 1499.99,
      rating: 4.9,
      category: "Desenvolvimento",
      duration: "2 semanas",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
    },
    {
      id: "3",
      name: "Suporte Técnico",
      description: "Suporte técnico remoto para problemas de TI",
      price: 99.99,
      rating: 4.7,
      category: "Suporte",
      duration: "1 hora",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2"
    }
  ];

  const handleAddToCart = (serviceId: string) => {
    toast({
      title: "Serviço adicionado ao carrinho",
      description: "O serviço foi adicionado ao seu carrinho com sucesso.",
    });
  };

  const handleRequestQuote = (serviceId: string) => {
    toast({
      title: "Solicitação de orçamento enviada",
      description: "Em breve entraremos em contato com mais informações.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Link 
                  to={`/service/${service.id}`}
                  className="hover:text-primary hover:underline"
                >
                  {service.name}
                </Link>
                <span className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  {service.rating}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Duração: {service.duration}
                  </span>
                  <span className="font-bold">
                    {service.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleRequestQuote(service.id)}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Orçamento
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => handleAddToCart(service.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}