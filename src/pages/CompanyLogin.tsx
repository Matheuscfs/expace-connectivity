import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const CompanyLogin = () => {
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success
    localStorage.setItem('company', JSON.stringify({ 
      cnpj,
      name: "Empresa Exemplo",
      logo: `https://api.dicebear.com/7.x/initials/svg?seed=${cnpj}`,
      id: "1" // Adicionando um ID simulado
    }));
    toast({
      title: "Login realizado com sucesso!",
      description: "Você será redirecionado para o painel da empresa.",
    });
    
    // Redirecionar para o dashboard da empresa com o ID simulado
    navigate("/company/private/1");
  };

  const handleGovLogin = () => {
    toast({
      title: "Login Gov.br",
      description: "Funcionalidade em desenvolvimento.",
    });
  };

  const handleDigitalCertLogin = () => {
    toast({
      title: "Login com Certificado Digital",
      description: "Funcionalidade em desenvolvimento.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in">
        <div className="text-center">
          <Link to="/" className="text-2xl font-bold text-primary inline-block">
            EX<span className="text-secondary">pace</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Área da Empresa
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre com suas credenciais para acessar o painel
          </p>
        </div>

        <Button
          variant="outline"
          type="button"
          className="w-full bg-[#1351B4] hover:bg-[#1351B4]/90 text-white border-none"
          onClick={handleGovLogin}
        >
          <img
            src="https://www.gov.br/logo-gov.br.png"
            alt="Gov.br"
            className="mr-2 h-5 w-5 rounded-sm bg-white p-0.5"
          />
          Entrar com Gov.br
        </Button>

        <Button
          variant="outline"
          type="button"
          className="w-full bg-[#008B45] hover:bg-[#008B45]/90 text-white border-none"
          onClick={handleDigitalCertLogin}
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          Entrar com Certificado Digital
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              Ou entre com CNPJ
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                type="text"
                placeholder="00.000.000/0000-00"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/company-forgot-password"
                className="font-medium text-primary hover:text-primary/90"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Entrar
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link
              to="/company-register"
              className="font-medium text-primary hover:text-primary/90"
            >
              Cadastrar empresa
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CompanyLogin;
