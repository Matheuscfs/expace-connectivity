
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

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

interface MapProps {
  companies: Company[];
}

const Map = ({ companies }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem('MAPBOX_ACCESS_TOKEN') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!localStorage.getItem('MAPBOX_ACCESS_TOKEN'));
  const [mapError, setMapError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleApiKeySubmit = () => {
    if (apiKey) {
      localStorage.setItem('MAPBOX_ACCESS_TOKEN', apiKey);
      setShowApiKeyInput(false);
      setMapError(null);
      initializeMap();
    }
  };

  const initializeMap = () => {
    if (!mapContainer.current) return;

    try {
      // Set access token for Mapbox
      mapboxgl.accessToken = localStorage.getItem('MAPBOX_ACCESS_TOKEN') || '';

      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-46.633308, -23.550520], // São Paulo coordinates
        zoom: 12
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add markers for companies
      companies.forEach((company) => {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-semibold">${company.name}</h3>
              <p class="text-sm text-gray-600">${company.category}</p>
              <p class="text-sm text-gray-500">${company.address}</p>
              <div class="mt-2">
                <button 
                  onclick="window.location.href='/company/${company.id}'"
                  class="text-sm text-blue-600 hover:text-blue-800"
                >
                  Ver perfil
                </button>
              </div>
            </div>
          `);

        new mapboxgl.Marker()
          .setLngLat([company.location.lng, company.location.lat])
          .setPopup(popup)
          .addTo(map.current);
      });

      // Handle map load error
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setMapError('Erro ao carregar o mapa. Verifique sua chave de API do Mapbox.');
        setShowApiKeyInput(true);
      });

    } catch (error) {
      console.error('Map initialization error:', error);
      setMapError('Erro ao inicializar o mapa. Verifique sua chave de API do Mapbox.');
      setShowApiKeyInput(true);
    }
  };

  useEffect(() => {
    if (!showApiKeyInput && mapContainer.current && !map.current) {
      initializeMap();
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [showApiKeyInput, companies]);

  if (showApiKeyInput) {
    return (
      <div className="p-4 space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Configuração Necessária</AlertTitle>
          <AlertDescription>
            Para utilizar o mapa, é necessário configurar uma chave de API do Mapbox válida.
            <a 
              href="https://account.mapbox.com/access-tokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-primary hover:underline"
            >
              Clique aqui para criar sua chave de API do Mapbox
            </a>
          </AlertDescription>
        </Alert>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Cole sua chave de API do Mapbox"
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
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
