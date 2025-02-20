
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Star } from "lucide-react";
import { Draggable } from "@hello-pangea/dnd";

interface LeadCardProps {
  lead: {
    id: string;
    client_name: string;
    client_email?: string;
    client_phone?: string;
    service_name: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
  };
  index: number;
}

export function LeadCard({ lead, index }: LeadCardProps) {
  const priorityColors = {
    low: "bg-blue-100 text-blue-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800"
  };

  return (
    <Draggable draggableId={lead.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="p-4 mb-3 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">{lead.client_name}</h4>
                <Badge variant="outline" className={priorityColors[lead.priority]}>
                  {lead.priority}
                </Badge>
              </div>
              
              <div className="text-sm text-muted-foreground">
                {lead.service_name}
              </div>
              
              {lead.description && (
                <p className="text-sm text-gray-600">{lead.description}</p>
              )}

              <div className="flex gap-3 text-sm text-gray-500">
                {lead.client_email && (
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {lead.client_email}
                  </div>
                )}
                {lead.client_phone && (
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {lead.client_phone}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
