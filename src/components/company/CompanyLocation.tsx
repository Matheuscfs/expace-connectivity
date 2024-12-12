import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

interface CompanyLocationProps {
  address: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
}

export function CompanyLocation({ address, contact }: CompanyLocationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Localização e Contato</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-200 rounded-lg h-[200px] flex items-center justify-center">
          <MapPin className="w-8 h-8 text-gray-400" />
          <span className="ml-2 text-gray-500">Mapa Interativo</span>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium">Endereço</h4>
              <p className="text-sm text-gray-600">{address}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium">Telefone</h4>
              <p className="text-sm text-gray-600">{contact.phone}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-sm text-gray-600">{contact.email}</p>
            </div>
          </div>
          
          {contact.website && (
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium">Website</h4>
                <p className="text-sm text-gray-600">{contact.website}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            Ligar
          </Button>
          <Button className="w-full">
            <Mail className="w-4 h-4 mr-2" />
            Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}