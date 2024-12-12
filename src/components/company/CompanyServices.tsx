import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, Upload, Edit2, Trash2, PauseCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  status: "active" | "review" | "paused";
}

const mockServices: Service[] = [
  {
    id: 1,
    name: "Consultoria em TI",
    description: "Análise completa da infraestrutura de TI e recomendações estratégicas.",
    price: 2500,
    duration: "20 horas",
    features: [
      "Análise de infraestrutura",
      "Relatório detalhado",
      "Plano de ação",
      "Suporte pós-consultoria"
    ],
    status: "active"
  },
];

const serviceCategories = [
  { value: "ti", label: "Tecnologia da Informação" },
  { value: "marketing", label: "Marketing Digital" },
  { value: "design", label: "Design e Criação" },
  { value: "consulting", label: "Consultoria" },
];

const serviceFeatures = [
  { id: "quick", label: "Atendimento Rápido" },
  { id: "sustainable", label: "Sustentável" },
  { id: "warranty", label: "Garantia Incluída" },
];

export function CompanyServices() {
  const [services, setServices] = useState<Service[]>(mockServices);
  const { toast } = useToast();
  const [description, setDescription] = useState("");

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Serviço cadastrado com sucesso!",
      description: "Seu serviço foi enviado e está em análise para ser exibido no marketplace.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Cadastre Seus Serviços e Amplie Suas Oportunidades</h1>
        <p className="text-muted-foreground">
          Detalhe o que você oferece e conecte-se com os clientes certos no ecossistema do futuro
        </p>
        <Button variant="outline" className="gap-2">
          <Eye className="w-4 h-4" />
          Visualizar Como Aparece para Clientes
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Novo Serviço</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleServiceSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Serviço</Label>
                <Input id="name" placeholder="Ex: Consultoria em Marketing Digital" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">
                  Descrição Detalhada
                  <span className="text-sm text-muted-foreground ml-2">
                    ({description.length}/500 caracteres)
                  </span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Descreva seu serviço em detalhes..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value.slice(0, 500))}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Preço ou Faixa de Preço</Label>
                <Input id="price" type="text" placeholder="Ex: R$ 1.000 ou Sob Consulta" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Localidade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de atendimento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="presential">Presencial</SelectItem>
                    <SelectItem value="remote">Remoto</SelectItem>
                    <SelectItem value="both">Ambos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4 md:col-span-2">
                <Label>Diferenciais</Label>
                <div className="grid gap-4 md:grid-cols-3">
                  {serviceFeatures.map((feature) => (
                    <div key={feature.id} className="flex items-center space-x-2">
                      <Checkbox id={feature.id} />
                      <Label htmlFor={feature.id}>{feature.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label>Imagens do Serviço</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <Button variant="outline" type="button">
                      Escolher Arquivos
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      PNG, JPG ou GIF (máx. 5 arquivos)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" type="button">Pré-visualizar</Button>
              <Button type="submit">Cadastrar Serviço</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Serviços Cadastrados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <Badge variant="secondary">{service.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-primary mb-4">
                    R$ {service.price.toLocaleString('pt-BR')}
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge
                      variant={
                        service.status === "active"
                          ? "default"
                          : service.status === "review"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {service.status === "active"
                        ? "Ativo"
                        : service.status === "review"
                        ? "Em Revisão"
                        : "Pausado"}
                    </Badge>
                    <div className="space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <PauseCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button className="gap-2">
          <AlertCircle className="w-4 h-4" />
          Aprenda a Melhorar a Exposição dos Seus Serviços
        </Button>
      </div>
    </div>
  );
}