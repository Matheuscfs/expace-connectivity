import { Star } from "lucide-react";
import { companies } from "@/data/mockCompanies";

const FeaturedCompanies = () => {
  // Group companies by sector
  const companiesBySector = companies.reduce((acc, company) => {
    const sector = company.category; // Using category instead of sector to match the existing data structure
    if (!acc[sector]) {
      acc[sector] = [];
    }
    acc[sector].push(company);
    return acc;
  }, {} as Record<string, typeof companies>);

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Empresas em Destaque</h2>
        {Object.entries(companiesBySector).map(([sector, sectorCompanies]) => (
          <div key={sector} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-primary">{sector}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectorCompanies.slice(0, 3).map((company) => (
                <div
                  key={company.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/30"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{company.name}</h3>
                  <div className="flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{company.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCompanies;