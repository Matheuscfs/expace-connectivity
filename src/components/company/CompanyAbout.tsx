import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, Instagram, Facebook, Linkedin } from "lucide-react";

interface CompanyAboutProps {
  description: string;
  address: string;
  workingHours: string;
  contact: {
    phone: string;
    email: string;
  };
  socialMedia: {
    website?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export function CompanyAbout({
  description,
  address,
  workingHours,
  contact,
  socialMedia,
}: CompanyAboutProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sobre a Empresa</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h4 className="font-medium">Endereço</h4>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Phone className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h4 className="font-medium">Telefone</h4>
              <p className="text-gray-600">{contact.phone}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Mail className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-gray-600">{contact.email}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Horário de Funcionamento</h4>
          <p className="text-gray-600">{workingHours}</p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Redes Sociais</h4>
          <div className="flex gap-4">
            {socialMedia.website && (
              <a href={socialMedia.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Globe className="w-5 h-5" />
              </a>
            )}
            {socialMedia.instagram && (
              <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {socialMedia.facebook && (
              <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {socialMedia.linkedin && (
              <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}