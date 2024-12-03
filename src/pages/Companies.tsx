import { useState } from "react"
import { Card } from "@/components/ui/card"
import CompanyFilters from "@/components/companies/CompanyFilters"
import { FeaturedCompanies } from "@/components/companies/FeaturedCompanies"
import { CompaniesList } from "@/components/companies/CompaniesList"
import { companies, categories } from "@/data/mockCompanies"
import { Button } from "@/components/ui/button"
import { Building, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const Companies = () => {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-primary/90 to-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">
              Encontre as Melhores Empresas no Expace
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Conecte-se com empresas de confiança e encontre os serviços ideais para o seu negócio
            </p>
            <div className="flex gap-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Busque por nome, categoria ou localização..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg text-foreground"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Button 
                variant="secondary"
                size="lg"
                className="whitespace-nowrap hover:scale-105 transition-transform"
              >
                <Building className="mr-2" />
                Cadastre sua empresa
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="bg-accent py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="whitespace-nowrap hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CompanyFilters
                categories={categories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </Card>
          </aside>

          {/* Companies Content */}
          <div className="lg:col-span-3 space-y-8">
            <FeaturedCompanies companies={companies} />
            <CompaniesList 
              companies={companies}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies