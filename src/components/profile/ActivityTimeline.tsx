import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ActivityTimeline = ({ user }: { user: any }) => {
  const activities = user.activities || [];

  return (
    <Card className="p-4">
      <h3 className="font-medium mb-4">Atividades Recentes</h3>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {activities.map((activity: any, index: number) => (
            <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
              <div>
                <p className="text-sm">{activity.description}</p>
                <span className="text-xs text-gray-500">{activity.date}</span>
              </div>
            </div>
          ))}
          {activities.length === 0 && (
            <p className="text-sm text-gray-500">Nenhuma atividade recente</p>
          )}
        </div>
      </ScrollArea>
    </Card>
  );
};