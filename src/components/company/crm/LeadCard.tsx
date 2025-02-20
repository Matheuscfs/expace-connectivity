
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Calendar, DollarSign } from "lucide-react";
import { Draggable } from "@hello-pangea/dnd";
import { format } from "date-fns";

interface LeadCardProps {
  lead: {
    id: string;
    client_name: string;
    client_email?: string;
    client_phone?: string;
    service_name: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    expected_value?: number;
    next_follow_up?: string;
    tags?: string[];
    lead_source?: string;
  };
  index: number;
  onClick: () => void;
}

export function LeadCard({ lead, index, onClick }: LeadCardProps) {
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
          onClick={onClick}
        >
          <Card className="p-4 mb-3 hover:shadow-md transition-shadow cursor-pointer">
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

              {lead.expected_value && (
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <DollarSign className="h-4 w-4" />
                  R$ {lead.expected_value}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {lead.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

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

              {lead.next_follow_up && (
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(lead.next_follow_up), 'dd/MM/yyyy HH:mm')}
                </div>
              )}
            </div>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
