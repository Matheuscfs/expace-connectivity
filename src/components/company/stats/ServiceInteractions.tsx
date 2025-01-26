import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const serviceData = [
  { name: 'Serviço A', interactions: 150 },
  { name: 'Serviço B', interactions: 75 },
  { name: 'Serviço C', interactions: 120 },
  { name: 'Serviço D', interactions: 90 },
];

export function ServiceInteractions() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Interações por Serviço</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={serviceData} 
              layout="vertical" 
              className="animate-in fade-in duration-700"
            >
              <defs>
                <linearGradient id="colorService" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4caf50" stopOpacity={0.3}/>
                </linearGradient>
              </defs>
              <XAxis type="number" stroke="#888888" />
              <YAxis dataKey="name" type="category" stroke="#888888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar 
                dataKey="interactions" 
                fill="url(#colorService)"
                radius={[0, 4, 4, 0]}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}