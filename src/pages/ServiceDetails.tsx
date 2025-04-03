
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceInfo } from "@/components/service/ServiceInfo";
import { ServiceProvider } from "@/components/service/ServiceProvider";
import { ServiceReviews } from "@/components/service/ServiceReviews";
import { ServiceSchedule } from "@/components/service/ServiceSchedule";
import { ServiceCustomization } from "@/components/service/ServiceCustomization";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { Footer } from "@/components/home/Footer";

const ServiceDetails = () => {
  const { id: serviceId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock service data - replace with actual API call
  const service = {
    id: serviceId,
    name: "Consultoria em TI",
    description: "Consultoria especializada em infraestrutura e segurança de TI",
    price: 299.99,
    company: "TechSolutions",
    rating: 4.8,
    duration: "2 horas"
  };

  const handleAddToCart = () => {
    const existingCartItems = localStorage.getItem('cartItems');
    let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
    
    cartItems.push({
      id: service.id,
      name: service.name,
      price: service.price,
      quantity: 1,
      company: service.company,
      scheduledDate: new Date().toISOString().split('T')[0]
    });
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    toast({
      title: "Serviço adicionado ao carrinho",
      description: "O serviço foi adicionado ao seu carrinho com sucesso.",
    });

    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <ServiceInfo serviceId={serviceId} />
            <ServiceProvider serviceId={serviceId} />
            <ServiceReviews serviceId={serviceId} professionalId={serviceId} />
          </div>
          
          <div className="space-y-6">
            <div className="sticky top-24">
              <div className="bg-card rounded-lg shadow-lg p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{service.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}</h3>
                  <p className="text-sm text-muted-foreground">
                    ou 12x de {(service.price / 12).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Duração estimada: {service.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Prestador: {service.company}
                  </p>
                </div>
                
                <Button 
                  className="w-full"
                  size="lg"
                  onClick={handleAddToCart}
                >
                  Finalizar Compra
                </Button>
              </div>
            </div>

            <ServiceSchedule serviceId={serviceId} />
            <ServiceCustomization serviceId={serviceId} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
