import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Search } from "lucide-react";

export function CompanySEO() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Otimização para Busca</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Título da Página</label>
            <Input placeholder="Digite o título otimizado para SEO" />
            <div className="mt-1">
              <Progress value={70} className="h-1" />
              <p className="text-xs text-gray-500 mt-1">
                70% - Bom comprimento para SEO
              </p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Meta Descrição</label>
            <Textarea 
              placeholder="Digite uma descrição atraente que aparecerá nos resultados de busca"
              className="h-24"
            />
            <div className="mt-1">
              <Progress value={85} className="h-1" />
              <p className="text-xs text-gray-500 mt-1">
                85% - Excelente descrição
              </p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Palavras-chave</label>
            <Input placeholder="tecnologia, desenvolvimento, software" />
            <p className="text-xs text-gray-500 mt-1">
              Separe as palavras-chave por vírgulas
            </p>
          </div>

          <Button className="w-full">
            <Search className="w-4 h-4 mr-2" />
            Atualizar SEO
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}