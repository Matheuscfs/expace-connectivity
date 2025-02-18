
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Phone, Mail, Share2, Heart, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data - substituir por dados reais do Supabase posteriormente
const mockProfessional = {
  id: "1",
  name: "João Silva",
  profession: "Eletricista",
  avatar: "https://github.com/shadcn.png",
  bio: "Profissional com mais de 10 anos de experiência em instalações elétricas residenciais e comerciais.",
  location: "São Paulo, SP",
  rating: 4.8,
  reviewCount: 156,
  hourlyRate: 120,
  experience: 10,
  availability: ["Manhã", "Tarde"],
  certifications: [
    "Certificação NR10",
    "Técnico em Elétrica"
  ],
  services: [
    {
      id: 1,
      name: "Instalação Elétrica Residencial",
      price: 150,
      description: "Serviço completo de instalação elétrica para residências"
    },
    {
      id: 2,
      name: "Manutenção Preventiva",
      price: 100,
      description: "Verificação e manutenção de sistemas elétricos"
    }
  ],
  portfolio: [
    {
      id: 1,
      title: "Instalação Completa",
      image: "https://picsum.photos/400/300",
      description: "Projeto residencial completo"
    }
  ],
  reviews: [
    {
      id: 1,
      author: "Maria Santos",
      rating: 5,
      comment: "Excelente profissional, muito pontual e organizado",
      date: "2024-02-15"
    }
  ],
  contact: {
    phone: "(11) 99999-9999",
    email: "joao.silva@email.com",
    whatsapp: "(11) 99999-9999"
  }
};

const ProfessionalProfile = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleContact = (type: 'whatsapp' | 'email') => {
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${mockProfessional.contact.whatsapp.replace(/\D/g, '')}`, '_blank');
    } else {
      window.location.href = `mailto:${mockProfessional.contact.email}`;
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${mockProfessional.name} - ${mockProfessional.profession}`,
        url: window.location.href,
      });
    } catch {
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
              <AvatarImage src={mockProfessional.avatar} alt={mockProfessional.name} />
              <AvatarFallback>{mockProfessional.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{mockProfessional.name}</h1>
                  <p className="text-lg text-muted-foreground">{mockProfessional.profession}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{mockProfessional.rating}</span>
                    <span className="text-muted-foreground">
                      ({mockProfessional.reviewCount} avaliações)
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
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-4">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Sobre</h2>
                  <p className="text-gray-600">{mockProfessional.bio}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{mockProfessional.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{mockProfessional.experience} anos de experiência</Badge>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Certificações</h2>
                  <div className="flex flex-wrap gap-2">
                    {mockProfessional.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline">{cert}</Badge>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Serviços Oferecidos</h2>
                  <div className="space-y-4">
                    {mockProfessional.services.map((service) => (
                      <div key={service.id} className="p-4 bg-accent rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                          <span className="font-medium">R$ {service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mockProfessional.portfolio.map((item) => (
                      <div key={item.id} className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                          <h3 className="font-medium">{item.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Avaliações</h2>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {mockProfessional.reviews.map((review) => (
                        <div key={review.id} className="p-4 bg-accent rounded-lg">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium">{review.author}</h3>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="ml-1">{review.rating}</span>
                            </div>
                          </div>
                          <p className="mt-2 text-gray-600">{review.comment}</p>
                          <span className="text-sm text-gray-500 mt-2 block">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
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
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{mockProfessional.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>{mockProfessional.contact.email}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Disponibilidade</h2>
              <div className="flex flex-wrap gap-2">
                {mockProfessional.availability.map((time, index) => (
                  <Badge key={index} variant="secondary">{time}</Badge>
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
