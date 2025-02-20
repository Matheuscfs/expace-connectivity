
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Phone, Mail, DollarSign, Tag, Clock, UserCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface LeadDetailsProps {
  lead: any;
  onClose: () => void;
}

export function LeadDetails({ lead, onClose }: LeadDetailsProps) {
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    fetchActivities();
  }, [lead.id]);

  const fetchActivities = async () => {
    const { data } = await supabase
      .from('crm_activities')
      .select('*')
      .eq('lead_id', lead.id)
      .order('created_at', { ascending: false });

    if (data) setActivities(data);
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{lead.client_name}</h3>
          <p className="text-sm text-muted-foreground">{lead.service_name}</p>
        </div>
        <Button variant="outline" onClick={onClose}>Fechar</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4" />
            {lead.client_email || "Não informado"}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" />
            {lead.client_phone || "Não informado"}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4" />
            {lead.expected_value ? `R$ ${lead.expected_value}` : "Valor não definido"}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <UserCircle className="h-4 w-4" />
            {lead.assigned_to ? "Atribuído" : "Não atribuído"}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            {lead.next_follow_up ? format(new Date(lead.next_follow_up), 'dd/MM/yyyy HH:mm') : "Sem agendamento"}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Tag className="h-4 w-4" />
            {lead.tags?.length ? lead.tags.join(", ") : "Sem tags"}
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium mb-4">Atividades</h4>
        <div className="space-y-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="p-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{activity.activity_type}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {format(new Date(activity.created_at), 'dd/MM/yyyy HH:mm')}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
