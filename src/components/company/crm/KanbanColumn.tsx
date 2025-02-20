
import { Card } from "@/components/ui/card";
import { Droppable } from "@hello-pangea/dnd";
import { LeadCard } from "./LeadCard";

interface KanbanColumnProps {
  id: string;
  title: string;
  leads: any[];
}

export function KanbanColumn({ id, title, leads }: KanbanColumnProps) {
  return (
    <Card className="p-4 min-w-[300px]">
      <h3 className="font-medium mb-4">{title}</h3>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-2 min-h-[200px]"
          >
            {leads.map((lead, index) => (
              <LeadCard key={lead.id} lead={lead} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Card>
  );
}
