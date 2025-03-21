
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { CompanyRegisterForm, CompanyFormValues } from "@/components/company/CompanyRegisterForm";

export default function CompanyRegister() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  function onSubmit(values: CompanyFormValues) {
    setIsLoading(true);
    console.log(values);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Store company data in localStorage for demonstration
      localStorage.setItem('company', JSON.stringify({
        cnpj: values.cnpj,
        name: values.tradingName,
        logo: values.logo || `https://api.dicebear.com/7.x/initials/svg?seed=${values.tradingName}`,
        id: "1", // Simulated ID
        email: values.email,
        phone: values.phone,
        address: values.address,
        category: values.category,
        description: values.description
      }));
      
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Redirecionando para o painel da empresa.",
      });
      
      setIsLoading(false);
      // Redirect to the company dashboard
      navigate("/company/private/1");
    }, 1500);
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cadastro de Empresa</h1>
        <CompanyRegisterForm onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
