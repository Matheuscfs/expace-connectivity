import { CompanySEO } from "../CompanySEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp } from "lucide-react";

export function SEOContent() {
  return (
    <div className="space-y-6">
      <CompanySEO />

      <Card>
        <CardHeader>
          <CardTitle>Análise de Palavras-chave</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">desenvolvimento web</h4>
                <p className="text-sm text-gray-500">Volume de busca: Alto</p>
              </div>
              <Button variant="outline" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                85%
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">aplicativos móveis</h4>
                <p className="text-sm text-gray-500">Volume de busca: Médio</p>
              </div>
              <Button variant="outline" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                72%
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}