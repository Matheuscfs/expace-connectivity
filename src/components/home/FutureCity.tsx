
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function FutureCity() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-accent rounded-2xl overflow-hidden shadow-lg">
          {/* Video Section */}
          <div className="lg:w-1/2 h-[300px] overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/XZmGGAbHqa0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4">A Cidade do Futuro</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Imagine uma cidade onde a tecnologia e a sustentabilidade se unem para criar um ambiente inteligente, 
              eficiente e humano. Na cidade do futuro, carros autônomos, energia limpa e conectividade total 
              transformam a maneira como vivemos, trabalhamos e nos relacionamos.
            </p>
            <Button 
              size="lg"
              className="group"
              onClick={() => navigate('/future-city')}
            >
              Saiba Mais
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
