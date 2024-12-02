import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyCard from "@/components/companies/CompanyCard";
import CompanyFilters from "@/components/companies/CompanyFilters";

const categories = [
  "Tecnologia",
  "Alimentação",
  "Saúde",
  "Beleza",
  "Educação",
  "Serviços Domésticos",
];

// Mock data for companies
const companies = [
  {
    id: 1,
    name: "TechSolutions",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Soluções tecnológicas para sua empresa",
    category: "Tecnologia",
    rating: 4.8,
    reviews: 156,
    featured: true,
  },
  {
    id: 2,
    name: "FoodDelivery",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Entrega de comida rápida e eficiente",
    category: "Alimentação",
    rating: 4.5,
    reviews: 89,
    featured: false,
  },
  {
    id: 3,
    name: "HealthCare Plus",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Cuidados com a saúde para toda família",
    category: "Saúde",
    rating: 4.9,
    reviews: 234,
    featured: true,
  },
  {
    id: 4,
    name: "BeautySpace",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Seu espaço de beleza e bem-estar",
    category: "Beleza",
    rating: 4.7,
    reviews: 167,
    featured: false,
  },
  {
    id: 5,
    name: "EduTech",
    logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    description: "Educação tecnológica de qualidade",
    category: "Educação",
    rating: 4.6,
    reviews: 145,
    featured: true,
  },
  {
    id: 6,
    name: "HomeServices",
    logo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    description: "Serviços domésticos profissionais",
    category: "Serviços Domésticos",
    rating: 4.4,
    reviews: 78,
    featured: false,
  },
];

const Companies = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

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
              {/* Featured Companies */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Empresas em Destaque
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companies
                    .filter((company) => company.featured)
                    .map((company) => (
                      <Card key={company.id} className="border-2 border-primary">
                        <CardContent className="p-6">
                          <CompanyCard company={company} featured />
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* All Companies */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Todas as Empresas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companies.map((company) => (
                    <Card key={company.id}>
                      <CardContent className="p-6">
                        <CompanyCard company={company} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center items-center space-x-4">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span>
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Companies;
