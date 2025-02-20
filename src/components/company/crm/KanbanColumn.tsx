
import { Card } from "@/components/ui/card";
import { Droppable } from "@hello-pangea/dnd";
import { LeadCard } from "./LeadCard";

interface KanbanColumnProps {
  id: string;
  title: string;
  leads: any[];
  onLeadClick: (lead: any) => void;
}

export function KanbanColumn({ id, title, leads, onLeadClick }: KanbanColumnProps) {
  return (
    <Card className="p-4 min-w-[300px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm text-muted-foreground">
          {leads.length} {leads.length === 1 ? 'lead' : 'leads'}
        </span>
      </div>
      
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-2 min-h-[200px]"
          >
            {leads.map((lead, index) => (
              <LeadCard 
                key={lead.id} 
                lead={lead} 
                index={index}
                onClick={() => onLeadClick(lead)}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Card>
  );
}
