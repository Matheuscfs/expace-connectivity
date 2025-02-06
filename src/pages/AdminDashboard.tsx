
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import {
  BarChart,
  DollarSign,
  Package,
  ShoppingBag,
  Star,
  Users,
} from "lucide-react";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";

// Add type for notification payload
type Notification = {
  id: string;
  title: string;
  message: string;
  type: string;
};

type NotificationPayload = RealtimePostgresChangesPayload<{
  [key: string]: any;
  old_record: Notification | null;
  record: Notification;
}>;

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTransactions: 0,
    activeSubscriptions: 0,
    averageRating: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch total users
        const { count: usersCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact' });

        // Fetch total transactions
        const { count: transactionsCount } = await supabase
          .from('transactions')
          .select('*', { count: 'exact' });

        // Fetch active subscriptions
        const { count: subscriptionsCount } = await supabase
          .from('user_subscriptions')
          .select('*', { count: 'exact' })
          .eq('status', 'active');

        // Fetch average rating
        const { data: ratings } = await supabase
          .from('testimonials')
          .select('rating');

        const averageRating = ratings?.reduce((acc, curr) => acc + (curr.rating || 0), 0) / (ratings?.length || 1);

        setStats({
          totalUsers: usersCount || 0,
          totalTransactions: transactionsCount || 0,
          activeSubscriptions: subscriptionsCount || 0,
          averageRating: Number(averageRating.toFixed(1)) || 0,
        });
      } catch (error) {
        toast({
          title: "Erro ao carregar estatísticas",
          description: "Não foi possível carregar as estatísticas do dashboard.",
          variant: "destructive",
        });
      }
    };

    fetchStats();
  }, [toast]);

  // Setup realtime subscription for notifications with proper typing
  useEffect(() => {
    const channel = supabase
      .channel('admin-dashboard')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'notifications'
        },
        (payload: NotificationPayload) => {
          // Add type guard to check if payload.new exists and has required properties
          if (payload.new && typeof payload.new === 'object' && 'title' in payload.new) {
            toast({
              title: "Nova Notificação",
              description: payload.new.title,
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard Administrativo</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Usuários
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Transações
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTransactions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Assinaturas Ativas
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeSubscriptions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avaliação Média
            </CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="mt-6">
        <TabsList>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="subscriptions">Assinaturas</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Usuários Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Implementar lista de usuários */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Últimas Transações</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Implementar lista de transações */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscriptions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assinaturas Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Implementar lista de assinaturas */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notificações do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Implementar lista de notificações */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
