import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";

interface ServiceScheduleProps {
  serviceId?: string;
}

export function ServiceSchedule({ serviceId }: ServiceScheduleProps) {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Mock data - replace with actual data fetching
  const availableTimes = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
  ];

  const handleSchedule = () => {
    if (!date || !selectedTime) {
      toast({
        title: "Erro",
        description: "Selecione uma data e horário para agendar.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Agendamento realizado",
      description: `Serviço agendado para ${date.toLocaleDateString()} às ${selectedTime}.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agendar Serviço</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />

        {date && (
          <div>
            <h4 className="font-medium mb-2">Horários Disponíveis</h4>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}

        <Button
          className="w-full"
          onClick={handleSchedule}
          disabled={!date || !selectedTime}
        >
          Confirmar Agendamento
        </Button>
      </CardContent>
    </Card>
  );
}