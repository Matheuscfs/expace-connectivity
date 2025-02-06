
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blogPost", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div>Carregando...</div>;
  if (!post) return <div>Post não encontrado</div>;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <Card className="mb-8">
        <CardContent className="prose prose-sm sm:prose lg:prose-lg max-w-none pt-6">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost;
