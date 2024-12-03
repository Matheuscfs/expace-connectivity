import { Card, CardContent } from "@/components/ui/card"
import CompanyCard from "./CompanyCard"
import type { Company } from "@/data/mockCompanies"

type FeaturedCompaniesProps = {
  companies: Company[]
}

export const FeaturedCompanies = ({ companies }: FeaturedCompaniesProps) => {
  const featuredCompanies = companies.filter(company => company.featured)

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        Empresas em Destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredCompanies.map((company) => (
          <Card key={company.id} className="border-2 border-primary">
            <CardContent className="p-6">
              <CompanyCard company={company} featured />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}