import { useState } from "react";
import { Star, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  "Tecnologia",
  "Alimentação",
  "Saúde",
  "Beleza",
  "Educação",
  "Serviços Domésticos",
];

const Companies = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Title Section */}
        <div className="bg-accent py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Empresas disponíveis</h1>
            <p className="text-gray-600">Explore todas as empresas cadastradas no Xplace.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Filtros</h2>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Categorias</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Localização</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Digite sua cidade"
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Avaliação mínima</h3>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-6 h-6 text-gray-300 cursor-pointer hover:text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Faixa de preço</h3>
                    <Slider
                      defaultValue={[0, 1000]}
                      max={1000}
                      step={50}
                      className="my-4"
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>R$ {priceRange[0]}</span>
                      <span>R$ {priceRange[1]}</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90">
                    Aplicar filtros
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Companies List */}
            <div className="lg:col-span-3">
              {/* Featured Companies */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Empresas em Destaque</h2>
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
                <h2 className="text-xl font-semibold mb-4">Todas as Empresas</h2>
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
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
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

// Company Card Component
const CompanyCard = ({ company, featured = false }) => {
  return (
    <div className="flex space-x-4">
      <img
        src={company.logo}
        alt={company.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{company.name}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{company.description}</p>
          </div>
          {featured && (
            <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">
              Destaque
            </span>
          )}
        </div>
        <div className="mt-2">
          <span className="text-sm text-gray-500">{company.category}</span>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium">{company.rating}</span>
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({company.reviews} avaliações)
            </span>
          </div>
        </div>
        <button className="mt-2 text-primary hover:text-primary/80 text-sm font-medium">
          Ver perfil
        </button>
      </div>
    </div>
  );
};

export default Companies;