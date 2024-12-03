import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Professionals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Profissionais Autônomos</h1>
          
          {/* Location Selection */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Selecione sua região
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <p className="font-medium">São Paulo - SP</p>
                <p className="text-sm text-gray-600">532 profissionais</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <p className="font-medium">Rio de Janeiro - RJ</p>
                <p className="text-sm text-gray-600">423 profissionais</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <p className="font-medium">Belo Horizonte - MG</p>
                <p className="text-sm text-gray-600">245 profissionais</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <p className="font-medium">Curitiba - PR</p>
                <p className="text-sm text-gray-600">198 profissionais</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <p className="font-medium">Porto Alegre - RS</p>
                <p className="text-sm text-gray-600">187 profissionais</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <p className="font-medium">Salvador - BA</p>
                <p className="text-sm text-gray-600">156 profissionais</p>
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