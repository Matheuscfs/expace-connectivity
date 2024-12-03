import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { CompanyHeader } from "@/components/company/CompanyHeader";
import { CompanyAbout } from "@/components/company/CompanyAbout";
import { CompanyPortfolio } from "@/components/company/CompanyPortfolio";
import { CompanyServices } from "@/components/company/CompanyServices";
import { CompanyReviews } from "@/components/company/CompanyReviews";
import { CompanyTeam } from "@/components/company/CompanyTeam";
import { CompanyStats } from "@/components/company/CompanyStats";
import { CompanyMarketing } from "@/components/company/CompanyMarketing";
import { CompanySEO } from "@/components/company/CompanySEO";
import { CompanyNotifications } from "@/components/company/CompanyNotifications";

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

  // Mock data for development
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
    workingHours: "Segunda à Sexta, 9h às 18h",
    status: "Verificada"
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <CompanyHeader
        logo={companyData.logo}
        name={companyData.name}
        description={companyData.shortDescription}
        status={companyData.status}
        onContact={handleContact}
        isOwner={true}
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
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <CompanyAbout
              description={companyData.about}
              address={companyData.contact.address}
              workingHours={companyData.workingHours}
              contact={companyData.contact}
              socialMedia={companyData.socialMedia}
            />
          </TabsContent>

          <TabsContent value="portfolio">
            <CompanyPortfolio />
          </TabsContent>

          <TabsContent value="services">
            <CompanyServices />
          </TabsContent>

          <TabsContent value="reviews">
            <CompanyReviews />
          </TabsContent>

          <TabsContent value="team">
            <CompanyTeam />
          </TabsContent>

          <TabsContent value="stats">
            <CompanyStats />
          </TabsContent>

          <TabsContent value="marketing">
            <CompanyMarketing />
          </TabsContent>

          <TabsContent value="seo">
            <CompanySEO />
          </TabsContent>

          <TabsContent value="notifications">
            <CompanyNotifications />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyProfile;