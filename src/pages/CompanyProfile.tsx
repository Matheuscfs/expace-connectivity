import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { CompanyHeader } from "@/components/company/CompanyHeader";
import { CompanyAbout } from "@/components/company/CompanyAbout";

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
  contact: {
    phone: "(11) 3456-7890",
    email: "contato@techsolutions.com.br",
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP"
  },
  status: "Verificada"
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

  return (
    <div className="min-h-screen bg-background pb-8">
      <CompanyHeader
        logo={companyData.logo}
        name={companyData.name}
        description={companyData.shortDescription}
        status={companyData.status}
        onContact={handleContact}
      />

      <div className="container mx-auto px-4 mt-8">
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="portfolio">Portfólio</TabsTrigger>
            <TabsTrigger value="services">Serviços</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            <TabsTrigger value="team">Equipe</TabsTrigger>
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <CompanyAbout
              description={companyData.about}
              address={companyData.contact.address}
              workingHours="Segunda à Sexta, 9h às 18h"
              contact={{
                phone: companyData.contact.phone,
                email: companyData.contact.email,
              }}
              socialMedia={companyData.socialMedia}
            />
          </TabsContent>

          <TabsContent value="portfolio">
            {/* Portfolio content will be implemented in the next iteration */}
            <div className="text-center py-8 text-gray-500">
              Portfólio em desenvolvimento
            </div>
          </TabsContent>

          <TabsContent value="services">
            {/* Services content will be implemented in the next iteration */}
            <div className="text-center py-8 text-gray-500">
              Serviços em desenvolvimento
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            {/* Reviews content will be implemented in the next iteration */}
            <div className="text-center py-8 text-gray-500">
              Avaliações em desenvolvimento
            </div>
          </TabsContent>

          <TabsContent value="team">
            {/* Team content will be implemented in the next iteration */}
            <div className="text-center py-8 text-gray-500">
              Equipe em desenvolvimento
            </div>
          </TabsContent>

          <TabsContent value="stats">
            {/* Stats content will be implemented in the next iteration */}
            <div className="text-center py-8 text-gray-500">
              Estatísticas em desenvolvimento
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyProfile;
