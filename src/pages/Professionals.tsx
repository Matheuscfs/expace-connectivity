import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Star, Search, Filter, MapPin, Briefcase, MessageCircle } from "lucide-react";
import { professionals } from "@/data/mockProfessionals";
import { toast } from "@/components/ui/use-toast";

const Professionals = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Safely get unique categories
  const categories = Array.from(
    new Set(professionals?.map((pro) => pro.profession) || [])
  );

  const handleRegionClick = (region: string) => {
    try {
      navigate(`/search-companies?region=${encodeURIComponent(region)}`);
    } catch (error) {
      console.error("Navigation error:", error);
      toast({
        title: "Error",
        description: "Não foi possível navegar para a região selecionada.",
        variant: "destructive",
      });
    }
  };

  // Safely filter professionals with error handling
  const filteredProfessionals = professionals?.filter(professional => {
    try {
      return selectedCategory === "" || professional.profession === selectedCategory;
    } catch (error) {
      console.error("Filter error:", error);
      return false;
    }
  }) || [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Implement search logic here
      toast({
        title: "Busca realizada",
        description: `Buscando por: ${searchTerm}`,
      });
    } catch (error) {
      console.error("Search error:", error);
      toast({
        title: "Erro na busca",
        description: "Não foi possível realizar a busca. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Encontre Profissionais Autônomos de Alta Qualidade
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Busque por profissionais ou serviços..."
                className="w-full pl-12 pr-4 py-3 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" />
              <Button 
                type="submit"
                variant="default"
                className="absolute right-2 top-2"
              >
                Buscar
              </Button>
            </form>
            
            {/* Popular Categories */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button
                variant="outline"
                className={`gap-2 ${
                  selectedCategory === "" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setSelectedCategory("")}
              >
                <Briefcase className="w-4 h-4" />
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className={`gap-2 ${
                    selectedCategory === category ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <Briefcase className="w-4 h-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-medium flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4" />
                Filtros
              </h3>
              
              <div className="space-y-6">
                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Localização
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite sua cidade"
                    className="w-full"
                  />
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Faixa de Preço (por hora)
                  </label>
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    className="my-4"
                    onValueChange={(value) => setPriceRange(value)}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Avaliação Mínima
                  </label>
                  <div className="space-y-2">
                    {[4, 3, 2].map((rating) => (
                      <label
                        key={rating}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input type="radio" name="rating" className="hidden" />
                        <div className="flex items-center">
                          {Array.from({ length: rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                          <span className="ml-2">{rating}+ estrelas</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Professionals Grid */}
          <main className="flex-1">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProfessionals.map((professional) => (
                <div
                  key={professional.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={professional.avatar}
                      alt={professional.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{professional.name}</h3>
                      <p className="text-sm text-gray-600">
                        {professional.profession}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">
                          {professional.rating} ({professional.reviews} avaliações)
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-600">
                    {professional.description}
                  </p>

                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <p className="text-sm font-medium">
                      R$ {professional.hourlyRate}/hora
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button variant="default" size="sm">
                        Ver Perfil
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Professionals;