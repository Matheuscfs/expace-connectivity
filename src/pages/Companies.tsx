import { useState } from "react"
import { Card } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CompanyFilters from "@/components/companies/CompanyFilters"
import { FeaturedCompanies } from "@/components/companies/FeaturedCompanies"
import { CompaniesList } from "@/components/companies/CompaniesList"
import { companies, categories } from "@/data/mockCompanies"
import { Button } from "@/components/ui/button"
import { Building } from "lucide-react"

const Companies = () => {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/90 to-primary py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4 animate-fade-in">
                Explore Empresas de Confiança no Expace
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Encontre os melhores parceiros para seu negócio, com avaliações reais e serviços de qualidade.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className="hover:scale-105 transition-transform"
              >
                <Building className="mr-2" />
                Cadastre sua empresa
              </Button>
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

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
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
      </main>

      <Footer />
    </div>
  )
}

export default Companies