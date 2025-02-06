
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Reports = () => {
  const data = [
    { month: "Jan", views: 400, applications: 240 },
    { month: "Fev", views: 300, applications: 139 },
    { month: "Mar", views: 200, applications: 980 },
    { month: "Abr", views: 278, applications: 390 },
    { month: "Mai", views: 189, applications: 480 },
    { month: "Jun", views: 239, applications: 380 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-8">Relatórios</h1>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#8884d8" />
                  <Line type="monotone" dataKey="applications" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total de Visualizações</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,606</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total de Candidaturas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,609</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Taxa de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15.4%</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
