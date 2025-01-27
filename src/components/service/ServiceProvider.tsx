import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";

interface ServiceProviderProps {
  serviceId?: string;
}

export function ServiceProvider({ serviceId }: ServiceProviderProps) {
  // Mock data - replace with actual data fetching
  const provider = {
    name: "TechSolutions",
    avatar: "https://github.com/shadcn.png",
    rating: 4.8,
    reviews: 156,
    location: "São Paulo, SP",
    workingHours: "Segunda à Sexta, 9h às 18h",
    specialties: ["Consultoria em TI", "Desenvolvimento", "Cloud"],
    description: "Empresa especializada em soluções tecnológicas para negócios.",
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={provider.avatar} alt={provider.name} />
            <AvatarFallback>{provider.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{provider.name}</CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{provider.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({provider.reviews} avaliações)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-600">{provider.description}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{provider.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{provider.workingHours}</span>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Especialidades</h4>
          <div className="flex flex-wrap gap-2">
            {provider.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}