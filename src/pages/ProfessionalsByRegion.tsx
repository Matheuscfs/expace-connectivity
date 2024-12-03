import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { professionals } from "@/data/mockProfessionals";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProfessionalsByRegion = () => {
  const { region } = useParams();
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [customLocation, setCustomLocation] = useState("");
  
  const regionProfessionals = professionals.filter(
    (p) => p.location === decodeURIComponent(region || "")
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24">
        <div className="max-w-6xl mx-auto flex gap-8">
          {/* Location Filter Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <h2 className="font-semibold mb-4">Localização</h2>
            <div className="space-y-3">
              <button
                onClick={() => setSelectedLocation("all")}
                className={`w-full text-left hover:text-primary transition-colors ${
                  selectedLocation === "all" ? "text-primary font-medium" : "text-gray-600"
                }`}
              >
                Todas as localizações
              </button>
              <button
                onClick={() => setSelectedLocation("myCity")}
                className={`w-full text-left hover:text-primary transition-colors ${
                  selectedLocation === "myCity" ? "text-primary font-medium" : "text-gray-600"
                }`}
              >
                Minha cidade
              </button>
              <button
                onClick={() => setSelectedLocation("10km")}
                className={`w-full text-left hover:text-primary transition-colors ${
                  selectedLocation === "10km" ? "text-primary font-medium" : "text-gray-600"
                }`}
              >
                Até 10 km
              </button>
              <button
                onClick={() => setSelectedLocation("50km")}
                className={`w-full text-left hover:text-primary transition-colors ${
                  selectedLocation === "50km" ? "text-primary font-medium" : "text-gray-600"
                }`}
              >
                Até 50 km
              </button>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedLocation("custom")}
                  className={`w-full text-left hover:text-primary transition-colors ${
                    selectedLocation === "custom" ? "text-primary font-medium" : "text-gray-600"
                  }`}
                >
                  Outra localização
                </button>
                {selectedLocation === "custom" && (
                  <Input
                    type="text"
                    placeholder="Digite a localização"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    className="w-full"
                  />
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalsByRegion;