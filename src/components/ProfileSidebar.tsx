import { 
  User, 
  Settings, 
  List, 
  LogOut, 
  Home,
  FileText,
  Users,
  Star,
  BarChart,
  Megaphone,
  Search,
  Bell
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface ProfileSidebarProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

const menuItems = [
  { icon: BarChart, label: "Estatísticas", value: "stats" },
  { icon: FileText, label: "Sobre", value: "about" },
  { icon: List, label: "Portfólio", value: "portfolio" },
  { icon: Home, label: "Serviços", value: "services" },
  { icon: Star, label: "Avaliações", value: "reviews" },
  { icon: Users, label: "Equipe", value: "team" },
  { icon: Megaphone, label: "Marketing", value: "marketing" },
  { icon: Search, label: "SEO", value: "seo" },
  { icon: Bell, label: "Notificações", value: "notifications" },
  { icon: Settings, label: "Configurações", value: "settings" },
];

export function ProfileSidebar({ onTabChange, activeTab }: ProfileSidebarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.value}>
                  <SidebarMenuButton
                    onClick={() => onTabChange(item.value)}
                    className={`flex items-center gap-2 px-4 py-2 w-full hover:bg-accent rounded-md transition-colors ${
                      activeTab === item.value ? 'bg-accent' : ''
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sair</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}