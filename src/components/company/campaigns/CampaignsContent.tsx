import { CompanyMarketing } from "../CompanyMarketing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target } from "lucide-react";

export function CampaignsContent() {
  return (
    <div className="space-y-6">
      <CompanyMarketing />

      <Card>
        <CardHeader>
          <CardTitle>Desempenho de Campanhas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">Campanha de Verão</h4>
                <p className="text-sm text-gray-500">Alcance: 15.000 visualizações</p>
              </div>
              <Button variant="outline" size="sm">
                <Target className="w-4 h-4 mr-2" />
                Ver detalhes
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">Promoção Especial</h4>
                <p className="text-sm text-gray-500">Alcance: 8.500 visualizações</p>
              </div>
              <Button variant="outline" size="sm">
                <Target className="w-4 h-4 mr-2" />
                Ver detalhes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}