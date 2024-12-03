import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  client: string;
  date: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão Empresarial",
    description: "Desenvolvimento de um sistema completo de gestão para empresa de médio porte.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    client: "Empresa ABC",
    date: "2023"
  },
  // Add more mock projects as needed
];

export function CompanyPortfolio() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{project.client}</span>
                <span>{project.date}</span>
              </div>
              <Button className="w-full mt-4">
                <Eye className="w-4 h-4 mr-2" />
                Ver detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}