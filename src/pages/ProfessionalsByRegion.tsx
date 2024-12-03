import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { professionals } from "@/data/mockProfessionals";
import { Star } from "lucide-react";

const ProfessionalsByRegion = () => {
  const { region } = useParams();
  const regionProfessionals = professionals.filter(
    (p) => p.location === decodeURIComponent(region || "")
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Profissionais em {decodeURIComponent(region || "")}
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regionProfessionals.map((professional) => (
              <div key={professional.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={professional.avatar}
                    alt={professional.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{professional.name}</h3>
                    <p className="text-sm text-gray-600">{professional.profession}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">
                        {professional.rating} ({professional.reviews} avaliações)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">{professional.description}</p>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium">
                    R$ {professional.hourlyRate}/hora
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalsByRegion;