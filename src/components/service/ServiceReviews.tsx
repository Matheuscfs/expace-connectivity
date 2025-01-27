import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ServiceReviewsProps {
  serviceId?: string;
}

export function ServiceReviews({ serviceId }: ServiceReviewsProps) {
  // Mock data - replace with actual data fetching
  const reviews = [
    {
      id: 1,
      user: {
        name: "João Silva",
        avatar: "https://github.com/shadcn.png",
      },
      rating: 5,
      date: "2024-01-15",
      comment: "Excelente serviço! Profissionais muito competentes e atenciosos.",
    },
    {
      id: 2,
      user: {
        name: "Maria Santos",
        avatar: "https://github.com/shadcn.png",
      },
      rating: 4,
      date: "2024-01-10",
      comment: "Bom atendimento e resultados satisfatórios.",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Avaliações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={review.user.avatar} alt={review.user.name} />
                  <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.user.name}</div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground ml-auto">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}