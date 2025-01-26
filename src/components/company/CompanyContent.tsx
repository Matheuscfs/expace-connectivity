import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardContent } from "./dashboard/DashboardContent";
import { SEOContent } from "./seo/SEOContent";
import { CampaignsContent } from "./campaigns/CampaignsContent";
import { CompanyServices } from "./CompanyServices";
import { CompanySettings } from "./settings/CompanySettings";

const tabsContent = {
  dashboard: <DashboardContent />,
  servicos: <CompanyServices />,
  seo: <SEOContent />,
  campanhas: <CampaignsContent />,
  configuracoes: <CompanySettings />,
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
            {key === "configuracoes" ? (
              tabsContent[key]
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}
                  </CardTitle>
                </CardHeader>
                <CardContent>{tabsContent[key]}</CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}