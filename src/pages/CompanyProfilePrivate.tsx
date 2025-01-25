import { useState } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
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
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Bell, MessageSquare } from "lucide-react";

const CompanyProfilePrivate = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("stats");

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

  const recentNotifications = [
    { id: 1, title: "Nova mensagem", time: "5 min atrás" },
    { id: 2, title: "Nova avaliação", time: "1 hora atrás" },
    { id: 3, title: "Novo pedido", time: "2 horas atrás" },
  ];

  const recentMessages = [
    { id: 1, name: "João Silva", message: "Olá, gostaria de saber mais...", time: "10 min atrás" },
    { id: 2, name: "Maria Santos", message: "Obrigado pelo atendimento!", time: "1 hora atrás" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <CompanyAbout
            description={companyData.about}
            address={companyData.contact.address}
            workingHours={companyData.workingHours}
            contact={companyData.contact}
            socialMedia={companyData.socialMedia}
          />
        );
      case "portfolio":
        return <CompanyPortfolio />;
      case "services":
        return <CompanyServices />;
      case "reviews":
        return <CompanyReviews />;
      case "team":
        return <CompanyTeam />;
      case "stats":
        return <CompanyStats />;
      case "marketing":
        return <CompanyMarketing />;
      case "seo":
        return <CompanySEO />;
      case "notifications":
        return <CompanyNotifications />;
      default:
        return <CompanyStats />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <Avatar>
                <img src={companyData.logo} alt={companyData.name} />
              </Avatar>
              <div>
                <h3 className="font-medium text-sm">{companyData.tradingName}</h3>
                <p className="text-xs text-gray-500">{companyData.location}</p>
              </div>
            </div>
          </div>
          <ProfileSidebar onTabChange={setActiveTab} activeTab={activeTab} />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <div className="container mx-auto p-6">
            {renderContent()}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 min-h-screen bg-white border-l p-4">
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="p-4">
              <h3 className="font-medium flex items-center gap-2 mb-4">
                <Bell className="w-4 h-4" />
                Notificações Recentes
              </h3>
              <div className="space-y-3">
                {recentNotifications.map((notification) => (
                  <div key={notification.id} className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Messages */}
            <Card className="p-4">
              <h3 className="font-medium flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4" />
                Mensagens Recentes
              </h3>
              <div className="space-y-3">
                {recentMessages.map((message) => (
                  <div key={message.id} className="space-y-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{message.name}</p>
                      <span className="text-xs text-gray-500">{message.time}</span>
                    </div>
                    <p className="text-xs text-gray-600">{message.message}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePrivate;