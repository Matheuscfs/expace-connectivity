import { ServiceInfo } from "@/components/service/ServiceInfo";
import { ServiceCustomization } from "@/components/service/ServiceCustomization";
import { ServiceProvider } from "@/components/service/ServiceProvider";
import { ServiceReviews } from "@/components/service/ServiceReviews";
import { ServiceSchedule } from "@/components/service/ServiceSchedule";
import { ServiceQuote } from "@/components/service/ServiceQuote";

const ServiceDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ServiceInfo />
          <ServiceProvider />
          <ServiceReviews />
          <ServiceSchedule />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <ServiceCustomization />
            <ServiceQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;