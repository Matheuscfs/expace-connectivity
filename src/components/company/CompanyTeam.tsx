import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  avatar: string;
  email: string;
}

const mockTeam: TeamMember[] = [
  {
    id: 1,
    name: "Ana Silva",
    position: "CEO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    email: "ana.silva@techsolutions.com.br"
  },
  // Add more mock team members as needed
];

export function CompanyTeam() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Equipe</h2>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Adicionar Colaborador
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTeam.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                  <p className="text-sm text-primary mt-1">{member.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}