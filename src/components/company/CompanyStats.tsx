import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Eye, Users, UserPlus, Activity } from "lucide-react";

const monthlyData = [
  { month: 'Jan', thisYear: 10000, lastYear: 8000 },
  { month: 'Feb', thisYear: 12000, lastYear: 9500 },
  { month: 'Mar', thisYear: 15000, lastYear: 11000 },
  { month: 'Apr', thisYear: 25000, lastYear: 15000 },
  { month: 'May', thisYear: 30000, lastYear: 18000 },
  { month: 'Jun', thisYear: 25000, lastYear: 20000 },
  { month: 'Jul', thisYear: 22000, lastYear: 19000 },
];

const deviceData = [
  { name: 'Linux', value: 15000 },
  { name: 'Mac', value: 25000 },
  { name: 'iOS', value: 20000 },
  { name: 'Windows', value: 30000 },
  { name: 'Android', value: 12000 },
  { name: 'Other', value: 18000 },
];

const locationData = [
  { name: 'São Paulo', value: 52.1 },
  { name: 'Rio de Janeiro', value: 22.8 },
  { name: 'Minas Gerais', value: 13.9 },
  { name: 'Outros', value: 11.2 },
];

const COLORS = ['#4caf50', '#2196f3', '#ffc107', '#ff5722'];

export function CompanyStats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7,265</div>
            <p className="text-xs text-muted-foreground">
              +11.01% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitas</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,671</div>
            <p className="text-xs text-muted-foreground">
              -0.03% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Novos Usuários</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +15.03% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,318</div>
            <p className="text-xs text-muted-foreground">
              +6.08% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Total de Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="thisYear" 
                    name="Este ano"
                    stroke="#4caf50" 
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="lastYear" 
                    name="Ano anterior"
                    stroke="#f44336" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tráfego por Localização</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {locationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Tráfego por Dispositivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deviceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}