import { Button } from "@/components/ui/button";
import { Edit, MessageSquare } from "lucide-react";

interface CompanyHeaderProps {
  logo: string;
  name: string;
  description: string;
  status: string;
  isOwner?: boolean;
  onEdit?: () => void;
  onContact?: () => void;
}

export function CompanyHeader({
  logo,
  name,
  description,
  status,
  isOwner = false,
  onEdit,
  onContact,
}: CompanyHeaderProps) {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={logo}
            alt={name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="text-gray-600">{description}</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                {status}
              </span>
            </div>
            <div className="flex gap-4">
              {isOwner && (
                <Button onClick={onEdit} variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar Perfil
                </Button>
              )}
              <Button onClick={onContact}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Enviar mensagem
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}