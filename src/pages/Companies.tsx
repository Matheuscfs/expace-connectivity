import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyCard from "@/components/companies/CompanyCard";
import CompanyFilters from "@/components/companies/CompanyFilters";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

const ITEMS_PER_PAGE = 4;

const Companies = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalItems = companies.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCompanies = companies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                  {currentCompanies.map((company) => (
                    <Card key={company.id}>
                      <CardContent className="p-6">
                        <CompanyCard company={company} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
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
