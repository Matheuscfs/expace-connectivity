import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { companies } from '@/data/mockCompanies';
import { useNavigate } from 'react-router-dom';
import { brazilianCities } from '@/data/brazilianCities';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
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
          // Default to Brazil center coordinates
          setUserLocation([-55.0000, -10.0000]);
        }
      );
    } else {
      console.log("Geolocation not available");
      // Default to Brazil center coordinates
      setUserLocation([-55.0000, -10.0000]);
    }
  };

  const addCompanyMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    companies.forEach((company) => {
      const [city] = company.location.split('-');
      const coordinates = getCityCoordinates(city);

      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = getCategoryColor(company.category);
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';

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

      const marker = new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map.current);

      markersRef.current.push(marker);
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
    const cityData = brazilianCities.find(c => c.city === city);
    if (cityData) {
      return [cityData.longitude, cityData.latitude];
    }
    return [-55.0000, -10.0000]; // Brazil center as fallback
  };

  useEffect(() => {
    getUserLocation();

    return () => {
      // Cleanup markers on unmount
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHM0Z2k2ZWowMGRqMmtvOWd4Z3E0cW85In0.Ef9n-jZQwL7NfQxZUqwKjQ';
      
      if (map.current) return;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: userLocation || [-55.0000, -10.0000],
        zoom: 4
      });

      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      map.current.on('load', () => {
        addCompanyMarkers();
      });

      return () => {
        if (map.current) {
          map.current.remove();
          map.current = null;
        }
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [userLocation]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0" />
      <style>
        {`
          .marker {
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
          }
          .marker:hover {
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  );
};

export default Map;