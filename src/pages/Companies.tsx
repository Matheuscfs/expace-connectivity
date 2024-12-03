import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CompanyFilters from "@/components/companies/CompanyFilters"
import { FeaturedCompanies } from "@/components/companies/FeaturedCompanies"
import { CompaniesList } from "@/components/companies/CompaniesList"
import { companies, categories } from "@/data/mockCompanies"

const Companies = () => {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Title Section */}
        <div className="bg-accent py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Empresas disponíveis</h1>
            <p className="text-gray-600">
              Explore todas as empresas cadastradas no Xplace.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <CompanyFilters
                categories={categories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>

            {/* Companies List */}
            <div className="lg:col-span-3">
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