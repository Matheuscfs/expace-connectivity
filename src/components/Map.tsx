import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { companies } from '@/data/mockCompanies';
import { useNavigate } from 'react-router-dom';
import { brazilianCities } from '@/data/brazilianCities';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const brazilCenter = {
  lat: -15.7975,
  lng: -47.8919,
};

const Map = () => {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAKYlSm5yjYRJZ4vUpgXC-ZPkwv3IOKftM',
    libraries: ['places'],
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
    <div className="relative w-full h-full">
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
              stylers: [{ saturation: -100 }]
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
            <div className="p-3">
              <h3 className="font-bold">{selectedCompany.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{selectedCompany.rating}</span>
              </div>
              <p className="text-sm mt-1">
                {selectedCompany.description.substring(0, 100)}...
              </p>
              <button
                className="mt-2 px-4 py-1 bg-primary text-white rounded-md text-sm"
                onClick={() => navigate(`/company/${selectedCompany.id}`)}
              >
                Ver Perfil
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;