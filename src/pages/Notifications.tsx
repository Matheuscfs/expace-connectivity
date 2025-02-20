
import { useState } from "react";
import Header from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { Bell, Settings, MessageSquare, Calendar, Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CompanyNotifications } from "@/components/company/CompanyNotifications";

// Mock data for notifications
const mockNotifications = [
  {
    id: 1,
    title: "Nova mensagem recebida",
    message: "Você recebeu uma nova mensagem de João Silva",
    type: "message",
    icon: MessageSquare,
    datetime: "2024-02-15T10:30:00",
    read: false,
  },
  {
    id: 2,
    title: "Atualização do sistema",
    message: "Novas funcionalidades foram adicionadas à plataforma",
    type: "system",
    icon: Settings,
    datetime: "2024-02-15T09:15:00",
    read: true,
  },
  {
    id: 3,
    title: "Agendamento confirmado",
    message: "Seu agendamento para amanhã às 14h foi confirmado",
    type: "appointment",
    icon: Calendar,
    datetime: "2024-02-14T18:20:00",
    read: true,
  },
  {
    id: 4,
    title: "Nova avaliação",
    message: "Seu serviço recebeu uma nova avaliação 5 estrelas",
    type: "review",
    icon: Star,
    datetime: "2024-02-14T15:45:00",
    read: false,
  },
];

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<"all" | "settings">("all");
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const getRelativeTime = (datetime: string) => {
    const date = new Date(datetime);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} dia${days > 1 ? 's' : ''} atrás`;
    if (hours > 0) return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
    if (minutes > 0) return `${minutes} minuto${minutes > 1 ? 's' : ''} atrás`;
    return 'Agora mesmo';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Notificações</h1>
            <Button variant="outline" onClick={markAllAsRead}>
              Marcar todas como lidas
            </Button>
          </div>

          <div className="flex gap-4">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
            >
              Todas as Notificações
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "outline"}
              onClick={() => setActiveTab("settings")}
            >
              Configurações
            </Button>
          </div>

          <div className="mt-6">
            {activeTab === "all" ? (
              <Card>
                <CardHeader>
                  <CardTitle>Todas as Notificações</CardTitle>
                  <CardDescription>
                    Visualize todas as suas notificações recentes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px]">
                    <div className="space-y-4">
                      {notifications.map((notification) => {
                        const Icon = notification.icon;
                        return (
                          <div
                            key={notification.id}
                            className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                              notification.read ? 'bg-white' : 'bg-blue-50'
                            }`}
                          >
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h3 className="font-medium">{notification.title}</h3>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {notification.message}
                                  </p>
                                </div>
                                <span className="text-xs text-gray-500">
                                  {getRelativeTime(notification.datetime)}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            ) : (
              <CompanyNotifications />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notifications;
