import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

interface CompanyTrustProps {
  highlights: string[];
  certifications: Array<{
    name: string;
    icon: string;
  }>;
}

export function CompanyTrust({ highlights, certifications }: CompanyTrustProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Confiabilidade</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Destaques</h3>
          <div className="space-y-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-3">Certificações</h3>
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-accent rounded-lg"
              >
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-center">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center bg-accent rounded-lg p-4">
          <span className="text-2xl font-bold text-primary">1,200+</span>
          <p className="text-sm text-gray-600">Projetos entregues com sucesso</p>
        </div>
      </CardContent>
    </Card>
  );
}