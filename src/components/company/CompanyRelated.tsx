import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CompanyCard from "@/components/companies/CompanyCard";
import { companies } from "@/data/mockCompanies";

interface CompanyRelatedProps {
  category: string;
}

export function CompanyRelated({ category }: CompanyRelatedProps) {
  // Filter companies by category and limit to 3
  const relatedCompanies = companies
    .filter(company => company.category === category)
    .slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Empresas Relacionadas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}