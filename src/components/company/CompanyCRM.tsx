
import { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { KanbanColumn } from "./crm/KanbanColumn";
import { LeadDetails } from "./crm/LeadDetails";

export function CompanyCRM() {
  const { id: companyId } = useParams();
  const { toast } = useToast();
  const [leads, setLeads] = useState<any[]>([]);
  const [selectedLead, setSelectedLead] = useState<any>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('crm_leads')
        .select(`
          *,
          crm_activities(*)
        `)
        .eq('company_id', companyId)
        .order('column_order', { ascending: true });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      toast({
        title: "Erro ao carregar leads",
        description: "Não foi possível carregar os leads. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleDragEnd = async (result: any) => {
    if (!result.destination) return;

    const { draggableId, source, destination } = result;
    
    const newLeads = Array.from(leads);
    const [removed] = newLeads.splice(source.index, 1);
    newLeads.splice(destination.index, 0, removed);

    setLeads(newLeads);

    try {
      const { error } = await supabase
        .from('crm_leads')
        .update({
          status: destination.droppableId,
          column_order: destination.index,
        })
        .eq('id', draggableId);

      if (error) throw error;

      // Log the activity
      await supabase.from('crm_activities').insert({
        lead_id: draggableId,
        company_id: companyId,
        activity_type: 'status_change',
        description: `Lead movido para ${destination.droppableId}`,
      });
    } catch (error) {
      toast({
        title: "Erro ao atualizar lead",
        description: "Não foi possível atualizar o status do lead. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const getColumnLeads = (status: string) => {
    return leads.filter(lead => lead.status === status);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">CRM</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Lead
        </Button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <KanbanColumn
            id="new"
            title="Novos Leads"
            leads={getColumnLeads('new')}
            onLeadClick={setSelectedLead}
          />
          <KanbanColumn
            id="in_progress"
            title="Em Andamento"
            leads={getColumnLeads('in_progress')}
            onLeadClick={setSelectedLead}
          />
          <KanbanColumn
            id="closed"
            title="Fechados"
            leads={getColumnLeads('closed')}
            onLeadClick={setSelectedLead}
          />
          <KanbanColumn
            id="lost"
            title="Perdidos"
            leads={getColumnLeads('lost')}
            onLeadClick={setSelectedLead}
          />
        </div>
      </DragDropContext>

      <Sheet open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          {selectedLead && (
            <LeadDetails 
              lead={selectedLead} 
              onClose={() => setSelectedLead(null)} 
            />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
