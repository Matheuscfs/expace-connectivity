import { Card } from "@/components/ui/card"
import CompanyCard from "./CompanyCard"
import type { Company } from "@/data/mockCompanies"

type FeaturedCompaniesProps = {
  companies: Company[]
}

export const FeaturedCompanies = ({ companies }: FeaturedCompaniesProps) => {
  const featuredCompanies = companies.filter(company => company.featured)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Empresas em Destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} featured />
        ))}
      </div>
    </div>
  )
}