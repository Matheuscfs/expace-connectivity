import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { companies } from '@/data/mockCompanies';
import { useNavigate } from 'react-router-dom';
import { brazilianCities } from '@/data/brazilianCities';
import { supabase } from '@/lib/supabase';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const brazilCenter = {
  lat: -15.7975,
  lng: -47.8919,
};

const libraries = ['places'];

const Map = () => {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
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
    return brazilCenter;
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
          setUserLocation(brazilCenter);
        }
      );
    } else {
      console.log("Geolocation not available");
      setUserLocation(brazilCenter);
    }
  };

  React.useEffect(() => {
    getUserLocation();
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={4}
      center={userLocation || brazilCenter}
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
          <div className="p-3 min-w-[200px]">
            <h3 className="font-bold text-lg">{selectedCompany.name}</h3>
            <div className="flex items-center mt-1">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{selectedCompany.rating}</span>
              <span className="text-sm text-gray-500 ml-1">
                ({selectedCompany.reviews} avaliações)
              </span>
            </div>
            <p className="text-sm mt-2 text-gray-600">
              {selectedCompany.description.substring(0, 100)}...
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="px-2 py-1 bg-accent rounded-full text-xs">
                {selectedCompany.category}
              </span>
              <span className="text-sm text-gray-500">
                {selectedCompany.location}
              </span>
            </div>
            <button
              className="mt-3 w-full px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary/90 transition-colors"
              onClick={() => navigate(`/company/${selectedCompany.id}`)}
            >
              Ver Perfil
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;