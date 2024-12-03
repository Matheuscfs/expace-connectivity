import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User, Settings, LogOut, Star, ShoppingCart, Heart, Calendar, Award, MessageSquare } from "lucide-react";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileInfo } from "@/components/profile/ProfileInfo";
import { ActivityTimeline } from "@/components/profile/ActivityTimeline";
import { ServicesSection } from "@/components/profile/ServicesSection";
import { ReviewsSection } from "@/components/profile/ReviewsSection";
import { FavoritesSection } from "@/components/profile/FavoritesSection";
import { OffersSection } from "@/components/profile/OffersSection";
import { StatsSection } from "@/components/profile/StatsSection";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userStr));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <ProfileHeader user={user} />
          
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <ProfileInfo user={user} />
              <StatsSection className="mt-6" user={user} />
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              <Tabs defaultValue="activities" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="activities" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Atividades
                  </TabsTrigger>
                  <TabsTrigger value="services" className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Serviços
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Avaliações
                  </TabsTrigger>
                  <TabsTrigger value="favorites" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Favoritos
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="activities" className="mt-6">
                  <ActivityTimeline user={user} />
                </TabsContent>

                <TabsContent value="services" className="mt-6">
                  <ServicesSection user={user} />
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <ReviewsSection user={user} />
                </TabsContent>

                <TabsContent value="favorites" className="mt-6">
                  <FavoritesSection user={user} />
                </TabsContent>
              </Tabs>

              <OffersSection className="mt-6" user={user} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;