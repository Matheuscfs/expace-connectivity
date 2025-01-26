import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const socialMediaData = [
  { month: 'Jan', instagram: 200, facebook: 150, linkedin: 100, tiktok: 80 },
  { month: 'Feb', instagram: 220, facebook: 160, linkedin: 110, tiktok: 85 },
  { month: 'Mar', instagram: 240, facebook: 170, linkedin: 120, tiktok: 90 },
  { month: 'Apr', instagram: 260, facebook: 180, linkedin: 130, tiktok: 95 },
];

export function SocialMediaStats() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Interações em Redes Sociais</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={socialMediaData} className="animate-in fade-in duration-700">
              <defs>
                {['instagram', 'facebook', 'linkedin', 'tiktok'].map((network, index) => (
                  <linearGradient key={network} id={`color${network}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={['#E1306C', '#4267B2', '#0077B5', '#000000'][index]} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={['#E1306C', '#4267B2', '#0077B5', '#000000'][index]} stopOpacity={0.3}/>
                  </linearGradient>
                ))}
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
              <Legend />
              <Bar dataKey="instagram" name="Instagram" fill="url(#colorinstagram)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="facebook" name="Facebook" fill="url(#colorfacebook)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="linkedin" name="LinkedIn" fill="url(#colorlinkedin)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tiktok" name="TikTok" fill="url(#colortiktok)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}