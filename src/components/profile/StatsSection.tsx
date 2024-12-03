import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

export const StatsSection = ({ user, className }: { user: any; className?: string }) => {
  const achievements = user.achievements || [];

  return (
    <Card className={`p-4 ${className}`}>
      <h3 className="font-medium mb-4">Conquistas</h3>
      <div className="space-y-4">
        {achievements.map((achievement: any, index: number) => (
          <div key={index} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium">{achievement.title}</h4>
              <p className="text-xs text-gray-500">{achievement.description}</p>
            </div>
          </div>
        ))}
        {achievements.length === 0 && (
          <p className="text-sm text-gray-500">Nenhuma conquista desbloqueada</p>
        )}
      </div>
    </Card>
  );
};