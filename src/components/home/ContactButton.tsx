
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ContactButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Precisa de ajuda?
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Fale conosco!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
