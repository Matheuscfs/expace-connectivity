import { useEffect, useState, useCallback } from "react";
import { GoogleMap, Marker, InfoWindow, StandaloneSearchBox } from "@react-google-maps/api";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Company {
  id: string;
  name: string;
  category: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ companies }: { companies: Company[] }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: -23.550520,
    lng: -46.633308,
  });

  useEffect(() => {
    if (!localStorage.getItem('GOOGLE_MAPS_API_KEY')) {
      localStorage.setItem('GOOGLE_MAPS_API_KEY', 'AIzaSyAKYlSm5yjYRJZ4vUpgXC-ZPkwv3IOKftM');
    }
  }, []);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onLoadSearchBox = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        if (place.geometry?.location) {
          setCenter({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
          map?.panTo(place.geometry.location);
          map?.setZoom(15);
        }
      }
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userPos);
          setCenter(userPos);
          map?.panTo(userPos);
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
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "TI": "#4F46E5",
      "Design": "#EC4899",
      "Marketing": "#F59E0B",
      default: "#6B7280"
    };
    return colors[category] || colors.default;
  };

  const handleMarkerClick = (company: Company) => {
    setSelectedCompany(company);
  };

  const handleInfoWindowClose = () => {
    setSelectedCompany(null);
  };

  const handleViewDetails = (companyId: string) => {
    navigate(`/company/${companyId}`);
  };

  const handleGetDirections = (company: Company) => {
    if (userLocation) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${company.location.lat},${company.location.lng}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="relative w-full h-[400px]">
      <div className="absolute top-4 left-4 z-10 w-72">
        <StandaloneSearchBox
          onLoad={onLoadSearchBox}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Buscar endereço..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </StandaloneSearchBox>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {companies.map((company) => (
          <Marker
            key={company.id}
            position={company.location}
            onClick={() => handleMarkerClick(company)}
            icon={{
              path: MapPin.toString(),
              fillColor: getCategoryColor(company.category),
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
            onCloseClick={handleInfoWindowClose}
          >
            <div className="p-2">
              <h3 className="font-semibold mb-1">{selectedCompany.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{selectedCompany.address}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleViewDetails(selectedCompany.id)}
                >
                  Ver Detalhes
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleGetDirections(selectedCompany)}
                >
                  Como Chegar
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