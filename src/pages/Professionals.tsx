import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { professionals } from "@/data/mockProfessionals";

const Professionals = () => {
  const navigate = useNavigate();

  const getProfessionalsCount = (location: string) => {
    return professionals.filter(p => p.location === location).length;
  };

  const handleRegionClick = (region: string) => {
    navigate(`/professionals/${encodeURIComponent(region)}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Profissionais Autônomos</h1>
          
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Selecione sua região
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <button 
                onClick={() => handleRegionClick("São Paulo-SP")}
                className="p-4 border rounded-lg hover:bg-gray-50 text-left"
              >
                <p className="font-medium">São Paulo - SP</p>
                <p className="text-sm text-gray-600">{getProfessionalsCount("São Paulo-SP")} profissionais</p>
              </button>
              <button 
                onClick={() => handleRegionClick("Rio de Janeiro-RJ")}
                className="p-4 border rounded-lg hover:bg-gray-50 text-left"
              >
                <p className="font-medium">Rio de Janeiro - RJ</p>
                <p className="text-sm text-gray-600">{getProfessionalsCount("Rio de Janeiro-RJ")} profissionais</p>
              </button>
              <button 
                onClick={() => handleRegionClick("Belo Horizonte-MG")}
                className="p-4 border rounded-lg hover:bg-gray-50 text-left"
              >
                <p className="font-medium">Belo Horizonte - MG</p>
                <p className="text-sm text-gray-600">{getProfessionalsCount("Belo Horizonte-MG")} profissionais</p>
              </button>
              <button 
                onClick={() => handleRegionClick("Curitiba-PR")}
                className="p-4 border rounded-lg hover:bg-gray-50 text-left"
              >
                <p className="font-medium">Curitiba - PR</p>
                <p className="text-sm text-gray-600">{getProfessionalsCount("Curitiba-PR")} profissionais</p>
              </button>
              <button 
                onClick={() => handleRegionClick("Porto Alegre-RS")}
                className="p-4 border rounded-lg hover:bg-gray-50 text-left"
              >
                <p className="font-medium">Porto Alegre - RS</p>
                <p className="text-sm text-gray-600">{getProfessionalsCount("Porto Alegre-RS")} profissionais</p>
              </button>
              <button 
                onClick={() => handleRegionClick("Salvador-BA")}
                className="p-4 border rounded-lg hover:bg-gray-50 text-left"
              >
                <p className="font-medium">Salvador - BA</p>
                <p className="text-sm text-gray-600">{getProfessionalsCount("Salvador-BA")} profissionais</p>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Professionals;