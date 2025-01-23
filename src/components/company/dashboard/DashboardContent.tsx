import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Users, Eye, Activity, UserPlus } from "lucide-react";

const monthlyData = [
  { month: 'Jan', users: 10000 },
  { month: 'Feb', users: 12000 },
  { month: 'Mar', users: 15000 },
  { month: 'Apr', users: 25000 },
  { month: 'May', users: 30000 },
  { month: 'Jun', users: 25000 },
  { month: 'Jul', users: 22000 },
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
  { name: 'United States', value: 52.1 },
  { name: 'Canada', value: 22.8 },
  { name: 'Mexico', value: 13.9 },
  { name: 'Other', value: 11.2 },
];

const trafficData = [
  { name: 'Google', value: 80 },
  { name: 'YouTube', value: 65 },
  { name: 'Instagram', value: 55 },
  { name: 'Pinterest', value: 45 },
  { name: 'Facebook', value: 35 },
  { name: 'Twitter', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7,265</div>
            <p className="text-xs text-muted-foreground">
              +11.01% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visits</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,671</div>
            <p className="text-xs text-muted-foreground">
              -0.03% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +15.03% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,318</div>
            <p className="text-xs text-muted-foreground">
              +6.08% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Total Users Overview</CardTitle>
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
                  dataKey="users" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Traffic by Device</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deviceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Traffic by Location</CardTitle>
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
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Traffic by Website</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trafficData.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="w-[100px] flex-shrink-0">{item.name}</div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-100 rounded">
                    <div
                      className="h-2 bg-primary rounded"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
                <div className="w-[50px] text-right text-sm text-muted-foreground">
                  {item.value}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}