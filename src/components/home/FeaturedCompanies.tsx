
import { Card } from "@/components/ui/card";

export const FeaturedCompanies = () => {
  const companies = [1, 2, 3, 4]; // Placeholder for company logos

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Empresas em Destaque
      </h2>
      <div className="flex justify-center space-x-4">
        {companies.map((company) => (
          <Card key={company} className="p-4 w-32 h-32 flex items-center justify-center">
            Logo {company}
          </Card>
        ))}
      </div>
    </section>
  );
};
