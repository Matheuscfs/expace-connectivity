import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    author: "João Silva",
    rating: 5,
    comment: "Excelente serviço, super profissionais e atenciosos.",
    date: "2024-02-15"
  },
  // Add more mock reviews as needed
];

export function CompanyReviews() {
  const averageRating = 4.5;
  const totalReviews = mockReviews.length;
  const ratingDistribution = [
    { stars: 5, count: 45 },
    { stars: 4, count: 30 },
    { stars: 3, count: 15 },
    { stars: 2, count: 7 },
    { stars: 1, count: 3 }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Avaliações e Comentários</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary">{averageRating}</div>
                <div className="flex justify-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Baseado em {totalReviews} avaliações
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {ratingDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-2">
                  <div className="w-12 text-sm">{dist.stars} stars</div>
                  <Progress value={(dist.count / totalReviews) * 100} className="h-2" />
                  <div className="w-12 text-sm text-right">{dist.count}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>
          <MessageSquare className="w-4 h-4 mr-2" />
          Escrever avaliação
        </Button>
      </div>

      <div className="space-y-4">
        {mockReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{review.author}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}