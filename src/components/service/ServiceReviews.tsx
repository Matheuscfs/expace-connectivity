
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

interface ServiceReviewsProps {
  serviceId?: string;
  professionalId?: string;
}

interface Review {
  id: string;
  user_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
  professional_id: string;
  user?: {
    first_name: string;
    last_name: string;
    avatar_url: string;
  };
}

export function ServiceReviews({ serviceId, professionalId }: ServiceReviewsProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");

  const { data: reviews, isLoading, refetch } = useQuery({
    queryKey: ["reviews", professionalId],
    queryFn: async () => {
      const { data: reviews, error } = await supabase
        .from("professional_reviews")
        .select(`
          *,
          user:profiles(
            first_name,
            last_name,
            avatar_url
          )
        `)
        .eq("professional_id", professionalId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return reviews as Review[];
    },
    enabled: !!professionalId,
  });

  const handleSubmitReview = async () => {
    if (!professionalId) return;

    try {
      setIsSubmitting(true);
      
      const { error } = await supabase.from("professional_reviews").insert({
        professional_id: professionalId,
        rating: userRating,
        comment: userComment.trim() || null,
      });

      if (error) throw error;

      toast({
        title: "Avaliação enviada",
        description: "Obrigado por compartilhar sua experiência!",
      });

      setUserRating(0);
      setUserComment("");
      refetch();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Erro ao enviar avaliação",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Avaliações</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Avaliações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Review Form */}
          <div className="space-y-4 border-b pb-6">
            <h3 className="font-medium">Deixe sua avaliação</h3>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setUserRating(i + 1)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-6 w-6 ${
                      i < userRating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                </button>
              ))}
            </div>
            <textarea
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              placeholder="Compartilhe sua experiência (opcional)"
              className="w-full rounded-md border p-2 text-sm"
              rows={3}
            />
            <Button
              onClick={handleSubmitReview}
              disabled={!userRating || isSubmitting}
            >
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Enviar Avaliação
            </Button>
          </div>

          {/* Reviews List */}
          {reviews?.map((review) => (
            <div key={review.id} className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src={review.user?.avatar_url}
                    alt={`${review.user?.first_name} ${review.user?.last_name}`}
                  />
                  <AvatarFallback>
                    {review.user?.first_name?.[0]}
                    {review.user?.last_name?.[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">
                    {review.user?.first_name} {review.user?.last_name}
                  </div>
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
                  {new Date(review.created_at).toLocaleDateString()}
                </span>
              </div>
              {review.comment && (
                <p className="text-sm text-gray-600">{review.comment}</p>
              )}
            </div>
          ))}

          {reviews?.length === 0 && (
            <p className="text-center text-muted-foreground py-4">
              Ainda não há avaliações. Seja o primeiro a avaliar!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
