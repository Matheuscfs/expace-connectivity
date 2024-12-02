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
  rating: 4.8,
  reviews: 156,
  services: {
    desenvolvimento: [
      {
        id: 1,
        name: "Desenvolvimento de Website",
        description: "Criação de sites modernos e responsivos",
        price: "A partir de R$ 5.000",
      },
      {
        id: 2,
        name: "Desenvolvimento de Aplicativos",
        description: "Apps nativos para iOS e Android",
        price: "A partir de R$ 10.000",
      },
    ],
    consultoria: [
      {
        id: 3,
        name: "Consultoria em TI",
        description: "Análise e planejamento de infraestrutura",
        price: "R$ 200/hora",
      },
      {
        id: 4,
        name: "Consultoria em Segurança",
        description: "Análise de vulnerabilidades e recomendações",
        price: "R$ 250/hora",
      },
    ],
    suporte: [
      {
        id: 5,
        name: "Suporte Técnico",
        description: "Atendimento remoto ou presencial",
        price: "R$ 150/hora",
      },
    ],
  },
};

const CompanyProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info - Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <img
                  src={companyData.logo}
                  alt={companyData.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">{companyData.name}</h1>
                <p className="text-gray-600 mb-4">{companyData.description}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{companyData.rating}</span>
                  <span className="text-gray-500 ml-2">
                    ({companyData.reviews} avaliações)
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Categoria: {companyData.category}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services - Right Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Serviços Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Desenvolvimento */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Desenvolvimento</h3>
                    <div className="grid gap-4">
                      {companyData.services.desenvolvimento.map((service) => (
                        <Card key={service.id} className="bg-accent/50">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-base mb-1">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                  {service.description}
                                </p>
                                <p className="text-primary font-medium text-sm">
                                  {service.price}
                                </p>
                              </div>
                              <Button size="sm">Solicitar Orçamento</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Consultoria */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Consultoria</h3>
                    <div className="grid gap-4">
                      {companyData.services.consultoria.map((service) => (
                        <Card key={service.id} className="bg-accent/50">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-base mb-1">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                  {service.description}
                                </p>
                                <p className="text-primary font-medium text-sm">
                                  {service.price}
                                </p>
                              </div>
                              <Button size="sm">Solicitar Orçamento</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Suporte */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Suporte</h3>
                    <div className="grid gap-4">
                      {companyData.services.suporte.map((service) => (
                        <Card key={service.id} className="bg-accent/50">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-base mb-1">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                  {service.description}
                                </p>
                                <p className="text-primary font-medium text-sm">
                                  {service.price}
                                </p>
                              </div>
                              <Button size="sm">Solicitar Orçamento</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
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