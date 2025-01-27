import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceInfo } from "@/components/service/ServiceInfo";
import { ServiceCustomization } from "@/components/service/ServiceCustomization";
import { ServiceProvider } from "@/components/service/ServiceProvider";
import { ServiceReviews } from "@/components/service/ServiceReviews";
import { ServiceSchedule } from "@/components/service/ServiceSchedule";
import { ServiceQuote } from "@/components/service/ServiceQuote";

const ServiceDetails = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("info");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="w-full justify-start">
              <TabsTrigger value="info">Informações</TabsTrigger>
              <TabsTrigger value="provider">Prestador</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              <TabsTrigger value="schedule">Agendamento</TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <ServiceInfo serviceId={id} />
            </TabsContent>

            <TabsContent value="provider">
              <ServiceProvider serviceId={id} />
            </TabsContent>

            <TabsContent value="reviews">
              <ServiceReviews serviceId={id} />
            </TabsContent>

            <TabsContent value="schedule">
              <ServiceSchedule serviceId={id} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <ServiceCustomization serviceId={id} />
          <ServiceQuote serviceId={id} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;