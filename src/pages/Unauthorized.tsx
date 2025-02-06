
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-destructive">401</h1>
        <h2 className="text-2xl font-semibold">Acesso não autorizado</h2>
        <p className="text-muted-foreground">
          Você não tem permissão para acessar esta página.
        </p>
        <div className="space-x-4">
          <Button onClick={() => navigate(-1)}>Voltar</Button>
          <Button variant="outline" onClick={() => navigate("/")}>
            Ir para a página inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
