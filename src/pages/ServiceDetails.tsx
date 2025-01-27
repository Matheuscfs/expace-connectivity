import { ServiceInfo } from "@/components/service/ServiceInfo";
import { ServiceCustomization } from "@/components/service/ServiceCustomization";
import { ServiceProvider } from "@/components/service/ServiceProvider";
import { ServiceReviews } from "@/components/service/ServiceReviews";
import { ServiceSchedule } from "@/components/service/ServiceSchedule";
import { ServiceQuote } from "@/components/service/ServiceQuote";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="info">Informações</TabsTrigger>
              <TabsTrigger value="provider">Prestador</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              <TabsTrigger value="schedule">Agendamento</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-6">
              <ServiceInfo />
            </TabsContent>

            <TabsContent value="provider" className="mt-6">
              <ServiceProvider />
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <ServiceReviews />
            </TabsContent>

            <TabsContent value="schedule" className="mt-6">
              <ServiceSchedule />
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <ServiceCustomization />
          <ServiceQuote />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;