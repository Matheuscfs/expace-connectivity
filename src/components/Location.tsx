import { MapPin } from "lucide-react";

const popularCities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte",
  "Brasília", "Salvador", "Curitiba"
];

const Location = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Encontre serviços na sua região</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
            <MapPin className="w-16 h-16 text-gray-400" />
            <span className="ml-2 text-gray-500">Mapa Interativo</span>
          </div>
          <div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Digite sua localização"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cidades Populares</h3>
              <div className="grid grid-cols-2 gap-4">
                {popularCities.map((city) => (
                  <button
                    key={city}
                    className="text-left px-4 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;