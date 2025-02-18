import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, X, Upload } from "lucide-react";
import Header from "@/components/Header";
import { Footer } from "@/components/home/Footer";

const formSchema = z.object({
  fullName: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  profession: z.string().min(2, "Profissão é obrigatória"),
  bio: z.string().max(300, "Biografia deve ter no máximo 300 caracteres"),
  location: z.string().min(2, "Localização é obrigatória"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  hourlyRate: z.string().min(1, "Valor hora é obrigatório"),
  experience: z.string().min(1, "Anos de experiência é obrigatório"),
});

type FormData = z.infer<typeof formSchema>;

export default function ProfessionalRegister() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [services, setServices] = useState<{ name: string; price: string }[]>([]);
  const [newService, setNewService] = useState({ name: "", price: "" });
  const [certifications, setCertifications] = useState<string[]>([]);
  const [newCertification, setNewCertification] = useState("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      profession: "",
      bio: "",
      location: "",
      email: "",
      phone: "",
      whatsapp: "",
      hourlyRate: "",
      experience: "",
    },
  });

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Erro",
          description: "A imagem deve ter no máximo 5MB",
          variant: "destructive",
        });
        return;
      }

      if (!file.type.startsWith("image/")) {
        toast({
          title: "Erro",
          description: "O arquivo deve ser uma imagem",
          variant: "destructive",
        });
        return;
      }

      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addService = () => {
    if (newService.name && newService.price) {
      setServices([...services, newService]);
      setNewService({ name: "", price: "" });
    }
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const addCertification = () => {
    if (newCertification) {
      setCertifications([...certifications, newCertification]);
      setNewCertification("");
    }
  };

  const removeCertification = (index: number) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  const toggleAvailability = (period: string) => {
    setAvailability(
      availability.includes(period)
        ? availability.filter((p) => p !== period)
        : [...availability, period]
    );
  };

  const onSubmit = async (data: FormData) => {
    if (!avatarFile) {
      toast({
        title: "Erro",
        description: "A foto de perfil é obrigatória",
        variant: "destructive",
      });
      return;
    }

    if (services.length === 0) {
      toast({
        title: "Erro",
        description: "Adicione pelo menos um serviço",
        variant: "destructive",
      });
      return;
    }

    try {
      toast({
        title: "Sucesso!",
        description: "Perfil criado com sucesso",
      });
      navigate("/professionals");
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao criar perfil. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 pt-24">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">Criar Perfil Profissional</h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <FormLabel>Foto de Perfil</FormLabel>
                <div className="flex items-center gap-4">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Preview"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="max-w-[250px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profissão</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Eletricista, Designer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Biografia</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Breve descrição sobre você e sua experiência"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Localização</FormLabel>
                      <FormControl>
                        <Input placeholder="Cidade, Estado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anos de Experiência</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormLabel>Serviços Oferecidos</FormLabel>
                <div className="flex gap-4">
                  <Input
                    placeholder="Nome do serviço"
                    value={newService.name}
                    onChange={(e) =>
                      setNewService({ ...newService, name: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Preço"
                    type="number"
                    value={newService.price}
                    onChange={(e) =>
                      setNewService({ ...newService, price: e.target.value })
                    }
                  />
                  <Button type="button" onClick={addService}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-accent p-3 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{service.name}</p>
                          <p className="text-sm text-muted-foreground">
                            R$ {service.price}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeService(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div className="space-y-4">
                <FormLabel>Certificações</FormLabel>
                <div className="flex gap-4">
                  <Input
                    placeholder="Nome da certificação"
                    value={newCertification}
                    onChange={(e) => setNewCertification(e.target.value)}
                  />
                  <Button type="button" onClick={addCertification}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-2"
                    >
                      {cert}
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={() => removeCertification(index)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <FormLabel>Disponibilidade</FormLabel>
                <div className="flex flex-wrap gap-2">
                  {["Manhã", "Tarde", "Noite"].map((period) => (
                    <Badge
                      key={period}
                      variant={
                        availability.includes(period) ? "default" : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() => toggleAvailability(period)}
                    >
                      {period}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full">
                Criar Perfil
              </Button>
            </form>
          </Form>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
