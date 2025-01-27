import { ServiceInfo } from "@/components/service/ServiceInfo";
import { ServiceCustomization } from "@/components/service/ServiceCustomization";
import { ServiceProvider } from "@/components/service/ServiceProvider";
import { ServiceReviews } from "@/components/service/ServiceReviews";
import { ServiceSchedule } from "@/components/service/ServiceSchedule";
import { ServiceQuote } from "@/components/service/ServiceQuote";

const ServiceDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <ServiceInfo />
          <ServiceProvider />
          <ServiceReviews />
          <ServiceSchedule />
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