import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript, Libraries } from '@react-google-maps/api';
import { companies } from '@/data/mockCompanies';
import { useNavigate } from 'react-router-dom';
import { brazilianCities } from '@/data/brazilianCities';
import { Star, MapPin } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

// Center on Paraná for better visualization
const paranaCenter = {
  lat: -25.2521,
  lng: -52.0215,
};

const libraries: Libraries = ['places'];

const Map = () => {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: localStorage.getItem('GOOGLE_MAPS_API_KEY') || '',
    libraries,
  });

  const mapRef = useRef<google.maps.Map>();
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Contabilidade': '#4A90E2',
      'Tecnologia': '#50E3C2',
      'Alimentação': '#F5A623',
      'Saúde': '#D0021B',
      'Beleza': '#BD10E0'
    };
    return colors[category] || '#7A7A7A';
  };

  const getCityCoordinates = (city: string): google.maps.LatLngLiteral => {
    const cityData = brazilianCities.find(c => c.city === city);
    if (cityData) {
      return { lat: cityData.latitude, lng: cityData.longitude };
    }
    return paranaCenter;
  };

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setUserLocation(paranaCenter);
        }
      );
    } else {
      console.log("Geolocation not available");
      setUserLocation(paranaCenter);
    }
  };

  React.useEffect(() => {
    getUserLocation();
  }, []);

  const renderReviews = (company: typeof companies[0]) => {
    return (
      <div className="mt-3 space-y-2">
        <h4 className="font-semibold text-sm">Últimas Avaliações</h4>
        {company.reviews > 0 && (
          <div className="bg-accent/50 p-2 rounded-md">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(company.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              "Excelente serviço, super recomendo!"
            </p>
            <p className="text-xs text-gray-500 mt-1">
              - Cliente verificado
            </p>
          </div>
        )}
      </div>
    );
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={7}
      center={userLocation || paranaCenter}
      onLoad={onMapLoad}
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "all",
            stylers: [{ saturation: -20 }]
          }
        ],
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      }}
    >
      {companies.map((company) => {
        const [city] = company.location.split('-');
        const position = getCityCoordinates(city);
        
        return (
          <Marker
            key={company.id}
            position={position}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: getCategoryColor(company.category),
              fillOpacity: 1,
              strokeColor: '#FFFFFF',
              strokeWeight: 2,
            }}
            onClick={() => setSelectedCompany(company)}
          />
        );
      })}

      {selectedCompany && (
        <InfoWindow
          position={getCityCoordinates(selectedCompany.location.split('-')[0])}
          onCloseClick={() => setSelectedCompany(null)}
        >
          <div className="p-3 min-w-[250px]">
            <div className="flex items-start gap-3">
              <img
                src={selectedCompany.logo}
                alt={selectedCompany.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">{selectedCompany.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{selectedCompany.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({selectedCompany.reviews} avaliações)
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-sm mt-2 text-gray-600">
              {selectedCompany.description.substring(0, 100)}...
            </p>
            
            <div className="mt-2 flex items-center gap-2">
              <span className="px-2 py-1 bg-accent rounded-full text-xs">
                {selectedCompany.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {selectedCompany.location}
              </span>
            </div>

            {renderReviews(selectedCompany)}

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => navigate(`/company/${selectedCompany.id}`)}
                className="flex-1 bg-primary text-white py-2 px-4 rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                Ver Perfil
              </button>
              <button
                className="flex-1 bg-accent text-accent-foreground py-2 px-4 rounded-md text-sm hover:bg-accent/90 transition-colors"
              >
                Como Chegar
              </button>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;