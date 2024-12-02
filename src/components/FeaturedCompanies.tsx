import { Star } from "lucide-react";

const companies = [
  { id: 1, name: "TechSolutions", rating: 4.8, logo: "https://via.placeholder.com/150", sector: "Tecnologia" },
  { id: 2, name: "BeautySpace", rating: 4.7, logo: "https://via.placeholder.com/150", sector: "Beleza" },
  { id: 3, name: "HomeServices", rating: 4.9, logo: "https://via.placeholder.com/150", sector: "Serviços Domésticos" },
  { id: 4, name: "FoodDelivery", rating: 4.6, logo: "https://via.placeholder.com/150", sector: "Alimentação" },
  { id: 5, name: "HealthCare", rating: 4.8, logo: "https://via.placeholder.com/150", sector: "Saúde" },
  { id: 6, name: "EduTech", rating: 4.7, logo: "https://via.placeholder.com/150", sector: "Tecnologia" },
];

const FeaturedCompanies = () => {
  // Group companies by sector
  const companiesBySector = companies.reduce((acc, company) => {
    if (!acc[company.sector]) {
      acc[company.sector] = [];
    }
    acc[company.sector].push(company);
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
              {sectorCompanies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full"
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