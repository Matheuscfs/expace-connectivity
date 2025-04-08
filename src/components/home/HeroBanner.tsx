
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";

export const HeroBanner = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Transforme suas ideias em resultados!
      </h1>
      <div className="flex justify-center space-x-4 mb-12">
        <Button variant="default">Buscar Serviços</Button>
        <Button variant="outline">Oferecer Serviços</Button>
      </div>
      <div className="flex justify-center space-x-4">
        <Image 
          src="/lovable-uploads/3e233e46-7ffb-47f3-9abf-4d41ee87a957.png" 
          alt="Professional Team" 
          className="w-1/3 rounded-lg shadow-md"
        />
        <Image 
          src="/lovable-uploads/3e233e46-7ffb-47f3-9abf-4d41ee87a957.png" 
          alt="Professional Team" 
          className="w-1/3 rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};
