import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data - em um caso real, isso viria de uma API
const companyData = {
  id: 1,
  name: "TechSolutions",
  logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  description: "Soluções tecnológicas para sua empresa",
  category: "Tecnologia",
  location: "São Paulo, SP",
  rating: 4.8,
  reviews: 156,
  sectors: {
    tecnologia: {
      title: "Tecnologia",
      services: [
        {
          id: 1,
          name: "Desenvolvimento Web",
          description: "Sites e aplicações web modernas",
          price: "A partir de R$ 5.000",
        },
        {
          id: 2,
          name: "Aplicativos Mobile",
          description: "Apps iOS e Android",
          price: "A partir de R$ 10.000",
        },
      ],
    },
    consultoria: {
      title: "Consultoria",
      services: [
        {
          id: 3,
          name: "Consultoria em TI",
          description: "Análise e planejamento",
          price: "R$ 200/hora",
        },
        {
          id: 4,
          name: "Segurança Digital",
          description: "Proteção de dados",
          price: "R$ 250/hora",
        },
      ],
    },
    suporte: {
      title: "Suporte",
      services: [
        {
          id: 5,
          name: "Suporte Técnico",
          description: "Atendimento especializado",
          price: "R$ 150/hora",
        },
      ],
    },
  },
};

const CompanyProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info - Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <img
                  src={companyData.logo}
                  alt={companyData.name}
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold">{companyData.name}</h1>
                  <p className="text-sm text-gray-600">{companyData.description}</p>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{companyData.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({companyData.reviews} avaliações)
                    </span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Categoria:</span> {companyData.category}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Localização:</span> {companyData.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services - Right Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="text-xl">Serviços Disponíveis</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {Object.entries(companyData.sectors).map(([key, sector]) => (
                    <div key={key} className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {sector.title}
                      </h3>
                      <div className="grid gap-4">
                        {sector.services.map((service) => (
                          <Card key={service.id} className="bg-white border-gray-100">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                  <h4 className="font-medium text-gray-900">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {service.description}
                                  </p>
                                  <p className="text-sm font-medium text-primary">
                                    {service.price}
                                  </p>
                                </div>
                                <Button size="sm" variant="outline">
                                  Solicitar
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyProfile;