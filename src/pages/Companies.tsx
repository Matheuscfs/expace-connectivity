
import { useState } from "react";
import { Search } from "lucide-react";
import { companies, categories } from "@/data/mockCompanies";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CompanyCard from "@/components/companies/CompanyCard";

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter companies based on search term
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryIcons = [
    { id: 1, name: "Ofertas da Semana", icon: "🔥", color: "bg-red-500" },
    { id: 2, name: "Serviços Rápidos", icon: "⚡", color: "bg-yellow-500" },
    { id: 3, name: "Consultoria", icon: "💡", color: "bg-blue-500" },
    { id: 4, name: "Tecnologia", icon: "💻", color: "bg-purple-500" },
    { id: 5, name: "Marketing", icon: "📢", color: "bg-green-500" },
    { id: 6, name: "Design", icon: "🎨", color: "bg-pink-500" },
    { id: 7, name: "Finanças", icon: "💰", color: "bg-indigo-500" },
    { id: 8, name: "Outros", icon: "🔍", color: "bg-gray-500" },
  ];

  const promotionalBanners = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Desconto Especial",
      description: "Até 40% OFF em serviços selecionados",
      color: "bg-gradient-to-r from-red-500 to-red-600",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Novos Parceiros",
      description: "20% OFF na primeira contratação",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Consultoria Grátis",
      description: "Na contratação de serviços premium",
      color: "bg-gradient-to-r from-green-500 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Search */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Busque por serviços ou empresas..."
              className="w-full pl-10 pr-4 py-2 rounded-full border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Categories */}
        <h2 className="text-xl font-semibold mb-4">
          Encontre serviços por categoria
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
          {categoryIcons.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-2xl mb-2`}>
                {category.icon}
              </div>
              <span className="text-sm text-center">{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Promotional Banners */}
        <Carousel className="mb-8">
          <CarouselContent>
            {promotionalBanners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className={`${banner.color} rounded-lg p-6 text-white h-48 flex flex-col justify-center`}>
                  <h3 className="text-2xl font-bold mb-2">{banner.title}</h3>
                  <p className="text-lg">{banner.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Companies List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Empresas em Destaque</h2>
            <Button variant="link" className="text-primary">
              Ver mais
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                onMessageClick={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
