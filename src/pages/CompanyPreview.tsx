
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CompanyHeader } from "@/components/company/CompanyHeader";
import { CompanyContent } from "@/components/company/CompanyContent";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export default function CompanyPreview() {
  const { id } = useParams();
  const { toast } = useToast();

  const { data: companyData, isLoading } = useQuery({
    queryKey: ['company', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        toast({
          title: "Erro ao carregar empresa",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      return data;
    },
  });

  const handleEdit = () => {
    console.log("Edit profile clicked");
  };

  const handleContact = () => {
    console.log("Contact clicked");
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Carregando...</div>;
  }

  if (!companyData) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Empresa não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CompanyHeader
        name={companyData.name}
        logo={companyData.logo}
        banner={companyData.banner}
        description={companyData.description}
        location={companyData.location}
        status={companyData.status}
        isOwner={companyData.isOwner}
        companyId={companyData.id}
        onEdit={handleEdit}
        onContact={handleContact}
      />
      <div className="container mx-auto px-4 py-8">
        <CompanyContent />
      </div>
    </div>
  );
}
