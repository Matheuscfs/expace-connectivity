import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Eye, Users, UserPlus, Activity, Monitor, Smartphone, Laptop } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { SocialMediaStats } from "./stats/SocialMediaStats";
import { ServiceInteractions } from "./stats/ServiceInteractions";
import { UserOrigins } from "./stats/UserOrigins";

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
  { name: 'Desktop', icon: Monitor, value: 30000 },
  { name: 'Mobile', icon: Smartphone, value: 25000 },
  { name: 'Tablet', icon: Laptop, value: 15000 },
];

const locationData = [
  { name: 'São Paulo', value: 52.1 },
  { name: 'Rio de Janeiro', value: 22.8 },
  { name: 'Minas Gerais', value: 13.9 },
  { name: 'Outros', value: 11.2 },
];

const COLORS = ['#4caf50', '#2196f3', '#ffc107', '#ff5722'];
const GRADIENTS = [
  'url(#colorGradient1)',
  'url(#colorGradient2)',
  'url(#colorGradient3)',
  'url(#colorGradient4)',
];

export function CompanyStats() {
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Dashboard Analytics</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Last 24 Hours</SelectItem>
            <SelectItem value="week">Last Week</SelectItem>
            <SelectItem value="month">Last Month</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
            <Eye className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">7,265</div>
            <p className="text-xs text-green-600 dark:text-green-400">
              +11.01% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitas</CardTitle>
            <Activity className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">3,671</div>
            <p className="text-xs text-blue-600 dark:text-blue-400">
              -0.03% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Novos Usuários</CardTitle>
            <UserPlus className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">156</div>
            <p className="text-xs text-purple-600 dark:text-purple-400">
              +15.03% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <Users className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">2,318</div>
            <p className="text-xs text-orange-600 dark:text-orange-400">
              +6.08% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Users Chart */}
        <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Total de Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} className="animate-in fade-in duration-700">
                  <defs>
                    <linearGradient id="colorThisYear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4caf50" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorLastYear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f44336" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f44336" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="thisYear" 
                    name="Este ano"
                    stroke="#4caf50" 
                    strokeWidth={3}
                    dot={false}
                    fill="url(#colorThisYear)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="lastYear" 
                    name="Ano anterior"
                    stroke="#f44336" 
                    strokeWidth={3}
                    dot={false}
                    fill="url(#colorLastYear)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* User Origins Chart */}
        <UserOrigins />

        {/* Service Interactions Chart */}
        <ServiceInteractions />

        {/* Social Media Stats Chart */}
        <SocialMediaStats />

        {/* Traffic by Location Chart */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Tráfego por Localização</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart className="animate-in fade-in duration-700">
                  <defs>
                    {COLORS.map((color, index) => (
                      <linearGradient key={`gradient-${index}`} id={`colorGradient${index + 1}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={0.8}/>
                        <stop offset="100%" stopColor={color} stopOpacity={0.5}/>
                      </linearGradient>
                    ))}
                  </defs>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1000}
                  >
                    {locationData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={GRADIENTS[index % GRADIENTS.length]}
                        className="hover:opacity-80 transition-opacity duration-300"
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic by Device Chart */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Tráfego por Dispositivo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deviceData} className="animate-in fade-in duration-700">
                <defs>
                  <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4caf50" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="url(#colorBar)"
                  radius={[4, 4, 0, 0]}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
