
import { useEffect, useState, useCallback } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Input } from "./ui/input";

interface Company {
  id: number;
  name: string;
  category: string;
  description?: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
} as const;

const Map = ({ companies = [] }: { companies: Company[] }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [center] = useState<google.maps.LatLngLiteral>({
    lat: -23.550520,
    lng: -46.633308,
  });
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem('GOOGLE_MAPS_API_KEY') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);

  const handleApiKeySubmit = () => {
    if (apiKey) {
      localStorage.setItem('GOOGLE_MAPS_API_KEY', apiKey);
      setShowApiKeyInput(false);
      setMapError(null);
      window.location.reload();
    }
  };

  const onLoad = useCallback((map: google.maps.Map) => {
    console.log("Map loaded");
    setMapError(null);
  }, []);

  const onError = useCallback((error: Error) => {
    console.error("Error loading Google Maps:", error);
    if (error.message.includes("ApiProjectMapError")) {
      setMapError("É necessário configurar uma chave de API do Google Maps válida com faturamento ativado.");
      setShowApiKeyInput(true);
    } else if (error.message.includes("NoApiKeys")) {
      setMapError("Chave de API do Google Maps não encontrada. Por favor, configure uma chave válida.");
      setShowApiKeyInput(true);
    } else {
      setMapError("Não foi possível carregar o mapa. Por favor, tente novamente mais tarde.");
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userPos);
        },
        () => {
          toast({
            title: "Erro",
            description: "Não foi possível obter sua localização.",
            variant: "destructive",
          });
        }
      );
    }
  }, [toast]);

  const handleMarkerClick = (company: Company) => {
    setSelectedCompany(company);
  };

  const handleViewProfile = (companyId: number) => {
    navigate(`/company/${companyId}`);
  };

  const handleSendMessage = (companyId: number) => {
    // Implemente a lógica de envio de mensagem aqui
    toast({
      title: "Chat",
      description: "Abrindo chat com a empresa...",
    });
  };

  if (showApiKeyInput) {
    return (
      <div className="p-4 space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Configuração Necessária</AlertTitle>
          <AlertDescription>
            Para utilizar o mapa, é necessário configurar uma chave de API do Google Maps válida com faturamento ativado.
            <a 
              href="https://console.cloud.google.com/google/maps-apis/credentials"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-primary hover:underline"
            >
              Clique aqui para criar sua chave de API
            </a>
          </AlertDescription>
        </Alert>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Cole sua chave de API do Google Maps"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleApiKeySubmit}>Salvar</Button>
        </div>
      </div>
    );
  }

  if (mapError) {
    return (
      <Alert variant="destructive" className="m-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro ao carregar o mapa</AlertTitle>
        <AlertDescription>{mapError}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="relative w-full h-[calc(100vh-80px)]">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {companies.map((company) => (
          <Marker
            key={company.id}
            position={company.location}
            onClick={() => handleMarkerClick(company)}
            icon={{
              path: MapPin.toString(),
              fillColor: "#007bff",
              fillOpacity: 1,
              strokeWeight: 1,
              strokeColor: "#FFFFFF",
              scale: 1.5,
            }}
          />
        ))}

        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
        )}

        {selectedCompany && (
          <InfoWindow
            position={selectedCompany.location}
            onCloseClick={() => setSelectedCompany(null)}
          >
            <div className="p-4 bg-white rounded-lg shadow-lg max-w-[300px]">
              <h3 className="text-lg font-semibold mb-2">{selectedCompany.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {selectedCompany.description || selectedCompany.category}
              </p>
              <p className="text-gray-500 text-sm mb-4">{selectedCompany.address}</p>
              <div className="flex gap-2">
                <Button
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => handleViewProfile(selectedCompany.id)}
                >
                  Ver Perfil
                </Button>
                <Button
                  variant="outline"
                  className="bg-[#28a745] text-white hover:bg-[#28a745]/90"
                  onClick={() => handleSendMessage(selectedCompany.id)}
                >
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
