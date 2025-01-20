import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { companies } from '@/data/mockCompanies';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const navigate = useNavigate();

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.longitude, position.coords.latitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to São Paulo if geolocation fails
          setUserLocation([-46.6333, -23.5505]);
        }
      );
    } else {
      console.log("Geolocation not available");
      // Default to São Paulo if geolocation not available
      setUserLocation([-46.6333, -23.5505]);
    }
  };

  const addCompanyMarkers = () => {
    if (!map.current) return;

    companies.forEach((company) => {
      // Convert location string to coordinates (mock data for demonstration)
      const [city] = company.location.split('-');
      // Mock coordinates based on city (in real app, would come from database)
      const coordinates = getCityCoordinates(city);

      // Create marker element
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = getCategoryColor(company.category);
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-3">
            <h3 class="font-bold">${company.name}</h3>
            <div class="flex items-center mt-1">
              <span class="text-yellow-400">★</span>
              <span class="ml-1">${company.rating}</span>
            </div>
            <p class="text-sm mt-1">${company.description.substring(0, 100)}...</p>
            <button 
              class="mt-2 px-4 py-1 bg-primary text-white rounded-md text-sm"
              onclick="window.location.href='/company/${company.id}'"
            >
              Ver Perfil
            </button>
          </div>
        `);

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map.current);
    });
  };

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

  const getCityCoordinates = (city: string): [number, number] => {
    // Mock coordinates for demonstration
    // In a real app, these would come from a geocoding service or database
    const coordinates: { [key: string]: [number, number] } = {
      'São Paulo': [-46.6333, -23.5505],
      'Rio de Janeiro': [-43.1729, -22.9068],
      'Curitiba': [-49.2671, -25.4289],
      'Porto Alegre': [-51.2177, -30.0346],
      'Belo Horizonte': [-43.9378, -19.9208],
    };
    return coordinates[city] || [-46.6333, -23.5505]; // Default to São Paulo
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      // Initialize map
      mapboxgl.accessToken = mapboxToken;
      
      if (map.current) return; // prevent re-initialization

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: userLocation || [-46.6333, -23.5505], // Default to São Paulo if no user location
        zoom: 12
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add company markers when map loads
      map.current.on('load', () => {
        addCompanyMarkers();
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken, userLocation]);

  if (showTokenInput) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <form onSubmit={(e) => {
          e.preventDefault();
          if (mapboxToken) {
            setShowTokenInput(false);
            initializeMap();
          }
        }} className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Enter your Mapbox Token</h3>
            <p className="text-sm text-gray-600 mb-4">
              To use the map feature, please enter your Mapbox public token. You can find this in your Mapbox account dashboard.
            </p>
            <Input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Enter your Mapbox public token"
              className="w-full"
            />
          </div>
          <Button type="submit" disabled={!mapboxToken}>
            Initialize Map
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0" />
      <style jsx>{`
        .marker {
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .marker:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Map;