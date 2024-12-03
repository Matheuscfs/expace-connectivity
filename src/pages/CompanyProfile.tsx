import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Phone, Mail, MessageSquare, ExternalLink, Instagram, Facebook, Linkedin, Globe, Award } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for development - In production, this would come from an API
const companyData = {
  id: 1,
  name: "TechSolutions Brasil LTDA",
  tradingName: "TechSolutions",
  logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  shortDescription: "Soluções tecnológicas inovadoras para empresas em crescimento",
  location: "São Paulo, SP",
  about: `TechSolutions é líder em soluções tecnológicas corporativas, 
          oferecendo serviços de alta qualidade desde 2010. Nossa missão 
          é transformar desafios em oportunidades através da tecnologia.`,
  sector: "Tecnologia da Informação",
  socialMedia: {
    website: "https://techsolutions.com.br",
    instagram: "techsolutions_br",
    facebook: "techsolutionsbr",
    linkedin: "techsolutions-brasil"
  },
  services: [
    {
      id: 1,
      name: "Desenvolvimento Web",
      price: "A partir de R$ 5.000",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Desenvolvimento de sites e aplicações web modernas",
      rating: 4.8,
      reviews: 45
    },
    {
      id: 2,
      name: "Consultoria em TI",
      price: "R$ 200/hora",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      description: "Consultoria especializada em tecnologia",
      rating: 4.9,
      reviews: 32
    }
  ],
  contact: {
    phone: "(11) 3456-7890",
    email: "contato@techsolutions.com.br",
    whatsapp: "5511987654321",
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP"
  },
  rating: 4.8,
  reviews: [
    {
      id: 1,
      author: "João Silva",
      rating: 5,
      comment: "Excelente serviço, super profissionais!",
      date: "2024-02-15",
      reply: "Obrigado pelo feedback, João! Ficamos felizes em ajudar."
    }
  ],
  certifications: [
    {
      id: 1,
      name: "ISO 9001",
      description: "Certificação de Qualidade",
      year: 2023
    }
  ],
  terms: {
    warranty: "Garantia de 90 dias em todos os serviços",
    exchange: "Política de satisfação garantida"
  }
};

const CompanyProfile = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("about");

  const handleContact = () => {
    toast({
      title: "Mensagem",
      description: "Em breve você poderá enviar mensagens para a empresa.",
    });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyData.contact.whatsapp}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header Section */}
      <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={companyData.logo}
              alt={companyData.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl font-bold">{companyData.tradingName}</h1>
                <p className="text-gray-600">{companyData.shortDescription}</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{companyData.location}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button onClick={handleContact}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Enviar mensagem
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver produtos/serviços
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="services">Produtos/Serviços</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            <TabsTrigger value="contact">Contato</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Sobre a Empresa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{companyData.about}</p>
                <div>
                  <h3 className="font-medium mb-2">Setor de Atuação</h3>
                  <p className="text-gray-600">{companyData.sector}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <a href={companyData.socialMedia.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      <Globe className="w-5 h-5" />
                    </a>
                    <a href={`https://instagram.com/${companyData.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={`https://facebook.com/${companyData.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={`https://linkedin.com/company/${companyData.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certificações e Prêmios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {companyData.certifications.map((cert) => (
                    <div key={cert.id} className="flex items-start gap-4">
                      <Award className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.description}</p>
                        <p className="text-sm text-gray-500">Ano: {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="grid md:grid-cols-2 gap-6">
              {companyData.services.map((service) => (
                <Card key={service.id}>
                  <CardContent className="p-6">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                      <p className="text-primary font-medium">{service.price}</p>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} avaliações)</span>
                      </div>
                      <Button className="w-full mt-4">Entrar em contato</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold ml-2">{companyData.rating}</span>
                  </div>
                  <span className="text-gray-500">
                    Baseado em {companyData.reviews.length} avaliações
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {companyData.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{review.author}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600">{review.comment}</p>
                      {review.reply && (
                        <div className="mt-4 ml-8 p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium">Resposta da empresa:</p>
                          <p className="text-sm text-gray-600 mt-1">{review.reply}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <span>{companyData.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <a href={`mailto:${companyData.contact.email}`} className="text-primary hover:underline">
                        {companyData.contact.email}
                      </a>
                    </div>
                    <Button onClick={handleWhatsApp} className="w-full">
                      WhatsApp
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Endereço</h3>
                    <p className="text-gray-600">{companyData.contact.address}</p>
                    <div className="mt-4 h-48 bg-gray-100 rounded-lg">
                      {/* Placeholder for Google Maps integration */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Mapa será carregado aqui
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyProfile;