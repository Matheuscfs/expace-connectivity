import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TrendingUp, Users, MessageSquare, Target, BarChart, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface MarketingPackage {
  id: number;
  title: string;
  description: string;
  price: number;
  features: string[];
  type: 'reach' | 'views' | 'messages';
}

interface Campaign {
  id: number;
  name: string;
  objective: string;
  target: string;
  budget: number;
  duration: string;
  copy: string;
  status: 'active' | 'paused' | 'completed';
  metrics: {
    reach: number;
    clicks: number;
    conversions: number;
  };
}

const mockPackages: MarketingPackage[] = [
  {
    id: 1,
    title: "Pacote Alcance Premium",
    description: "Aumente sua exposição em 100% em 7 dias",
    price: 499,
    features: [
      "Destaque na página inicial",
      "Posts patrocinados",
      "Relatório de desempenho",
      "Suporte prioritário"
    ],
    type: 'reach'
  },
];

const mockCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Campanha de Verão",
    objective: "Aumentar vendas",
    target: "18-35 anos, São Paulo",
    budget: 1000,
    duration: "30 dias",
    copy: "Aproveite as ofertas especiais de verão!",
    status: 'active',
    metrics: {
      reach: 15000,
      clicks: 500,
      conversions: 50
    }
  }
];

export function CompanyMarketing() {
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [objective, setObjective] = useState("");
  const [target, setTarget] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [copy, setCopy] = useState("");
  const { toast } = useToast();

  const handleCreateCampaign = () => {
    if (!campaignName || !objective || !target || !budget || !duration || !copy) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Sucesso",
      description: "Campanha criada com sucesso! Em breve você poderá gerenciar suas campanhas aqui.",
    });

    setShowNewCampaign(false);
    resetForm();
  };

  const resetForm = () => {
    setCampaignName("");
    setObjective("");
    setTarget("");
    setBudget("");
    setDuration("");
    setCopy("");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Transforme seu Negócio com Campanhas Multicanal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            No Expace Connectivity, criamos uma solução poderosa para você alcançar mais clientes. 
            Agora, com um único clique, você pode criar campanhas de marketing que serão publicadas 
            simultaneamente em redes sociais como Instagram, Facebook e até no Google Ads.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Simplicidade</h3>
                <p className="text-sm text-gray-600">Crie e gerencie campanhas sem sair da plataforma.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Alcance Ampliado</h3>
                <p className="text-sm text-gray-600">Publique em múltiplos canais ao mesmo tempo.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BarChart className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Resultados Medidos</h3>
                <p className="text-sm text-gray-600">Monitore o desempenho em um único painel.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Target className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Personalização</h3>
                <p className="text-sm text-gray-600">Direcione suas campanhas ao público ideal.</p>
              </CardContent>
            </Card>
          </div>

          {!showNewCampaign ? (
            <Button 
              className="w-full md:w-auto" 
              onClick={() => setShowNewCampaign(true)}
            >
              Criar Minha Campanha
            </Button>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Nova Campanha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Nome da Campanha</label>
                  <Input
                    placeholder="Digite o nome da sua campanha"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Objetivo</label>
                  <Input
                    placeholder="Ex: Aumentar vendas, divulgar serviço"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Público-alvo</label>
                  <Input
                    placeholder="Ex: 18-35 anos, São Paulo"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Orçamento (R$)</label>
                  <Input
                    type="number"
                    placeholder="Digite o valor do orçamento"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Duração</label>
                  <Input
                    placeholder="Ex: 30 dias"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Texto do Anúncio</label>
                  <Textarea
                    placeholder="Digite o texto principal do seu anúncio"
                    value={copy}
                    onChange={(e) => setCopy(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Mídia</label>
                  <Button variant="outline" className="w-full">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Fazer upload de imagem ou vídeo
                  </Button>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleCreateCampaign}>
                    Criar Campanha
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowNewCampaign(false);
                      resetForm();
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Campanhas Ativas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCampaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{campaign.name}</h3>
                      <p className="text-sm text-gray-600">{campaign.objective}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      {campaign.status === 'active' ? 'Pausar' : 'Ativar'}
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Alcance</p>
                      <p className="font-semibold">{campaign.metrics.reach.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Cliques</p>
                      <p className="font-semibold">{campaign.metrics.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Conversões</p>
                      <p className="font-semibold">{campaign.metrics.conversions.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockPackages.map((pkg) => (
          <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
                {pkg.type === 'reach' && <TrendingUp className="w-5 h-5 text-primary" />}
                {pkg.type === 'views' && <Users className="w-5 h-5 text-primary" />}
                {pkg.type === 'messages' && <MessageSquare className="w-5 h-5 text-primary" />}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">
                R$ {pkg.price.toLocaleString('pt-BR')}
              </div>
              <Button className="w-full">Contratar pacote</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}