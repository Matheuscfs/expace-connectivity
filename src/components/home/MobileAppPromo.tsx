
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";

export const MobileAppPromo = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Manage all projects from your mobile
          </h2>
          <p className="mb-4">Download our mobile app</p>
          <div className="flex space-x-4">
            <Button variant="secondary">App Store</Button>
            <Button variant="outline">Google Play</Button>
          </div>
        </div>
        <Image 
          src="/placeholder.svg" 
          alt="Mobile App" 
          className="w-1/3"
        />
      </div>
    </section>
  );
};
