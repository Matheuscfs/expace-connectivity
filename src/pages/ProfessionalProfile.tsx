
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Phone, Mail, Share2, Heart, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";

interface Professional {
  id: string;
  name: string;
  profession: string;
  avatar_url: string;
  description: string;
  location: string;
  rating: number;
  review_count: number;
  hourly_rate: number;
  experience_years: number;
  contact?: {
    phone: string;
    email: string;
    whatsapp: string;
  };
}

interface Service {
  id: string;
  name: string;
  price: number;
}

interface Certification {
  id: string;
  name: string;
}

interface Availability {
  id: string;
  period: string;
}

const ProfessionalProfile = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const { data: professional, isLoading } = useQuery({
    queryKey: ["professional", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("professionals")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as Professional;
    },
  });

  const { data: services } = useQuery({
    queryKey: ["professional-services", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("professional_services")
        .select("*")
        .eq("professional_id", id);

      if (error) throw error;
      return data as Service[];
    },
  });

  const { data: certifications } = useQuery({
    queryKey: ["professional-certifications", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("professional_certifications")
        .select("*")
        .eq("professional_id", id);

      if (error) throw error;
      return data as Certification[];
    },
  });

  const { data: availability } = useQuery({
    queryKey: ["professional-availability", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("professional_availability")
        .select("*")
        .eq("professional_id", id);

      if (error) throw error;
      return data as Availability[];
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Carregando...</div>
      </div>
    );
  }

  if (!professional) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Profissional não encontrado</div>
      </div>
    );
  }

  const handleContact = (type: 'whatsapp' | 'email') => {
    if (type === 'whatsapp' && professional.contact?.whatsapp) {
      window.open(`https://wa.me/${professional.contact.whatsapp.replace(/\D/g, '')}`, '_blank');
    } else if (type === 'email' && professional.contact?.email) {
      window.location.href = `mailto:${professional.contact.email}`;
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${professional.name} - ${professional.profession}`,
        url: window.location.href,
      });
    } catch {
      // Fallback para copiar o link
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link do perfil foi copiado para sua área de transferência.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={professional.avatar_url} alt={professional.name} />
              <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{professional.name}</h1>
                  <p className="text-lg text-muted-foreground">{professional.profession}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{professional.rating}</span>
                    <span className="text-muted-foreground">
                      ({professional.review_count} avaliações)
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={() => handleContact('whatsapp')}>
                    Solicitar Serviço
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                    {isFavorite ? 'Favoritado' : 'Favoritar'}
                  </Button>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-6">
            <Tabs defaultValue="about" className="w-full">
              <TabsList>
                <TabsTrigger value="about">Sobre</TabsTrigger>
                <TabsTrigger value="services">Serviços</TabsTrigger>
                <TabsTrigger value="certifications">Certificações</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-4">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Sobre</h2>
                  <p className="text-gray-600">{professional.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{professional.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{professional.experience_years} anos de experiência</Badge>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Serviços Oferecidos</h2>
                  <div className="space-y-4">
                    {services?.map((service) => (
                      <div key={service.id} className="p-4 bg-accent rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{service.name}</h3>
                          </div>
                          <span className="font-medium">R$ {service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="certifications">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Certificações</h2>
                  <div className="flex flex-wrap gap-2">
                    {certifications?.map((cert) => (
                      <Badge key={cert.id} variant="secondary">{cert.name}</Badge>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Contact and Availability */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contato</h2>
              <div className="space-y-4">
                <Button 
                  className="w-full" 
                  onClick={() => handleContact('whatsapp')}
                >
                  Solicitar Orçamento
                </Button>
                {professional.contact?.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>{professional.contact.phone}</span>
                  </div>
                )}
                {professional.contact?.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>{professional.contact.email}</span>
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Disponibilidade</h2>
              <div className="flex flex-wrap gap-2">
                {availability?.map((time) => (
                  <Badge key={time.id} variant="secondary">{time.period}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
