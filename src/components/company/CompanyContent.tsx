import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardContent } from "./dashboard/DashboardContent";
import { SEOContent } from "./seo/SEOContent";
import { CampaignsContent } from "./campaigns/CampaignsContent";
import { CompanyServices } from "./CompanyServices";

const tabsContent = {
  dashboard: <DashboardContent />,
  servicos: <CompanyServices />,
  seo: <SEOContent />,
  campanhas: <CampaignsContent />,
  configuracoes: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Configurações Gerais</h2>
      <p>Personalize preferências e gerencie a segurança da sua conta.</p>
    </div>
  ),
};

export function CompanyContent() {
  return (
    <div className="flex-1 p-6">
      <Tabs defaultValue="dashboard" className="space-y-8">
        <TabsList className="w-full justify-start flex-wrap">
          {Object.keys(tabsContent).map((key) => (
            <TabsTrigger key={key} value={key}>
              {key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(tabsContent).map((key) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle>{key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}</CardTitle>
              </CardHeader>
              <CardContent>{tabsContent[key]}</CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}