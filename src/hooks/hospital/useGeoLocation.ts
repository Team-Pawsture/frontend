import { useEffect, useState } from 'react';

import type { Coordinates } from '@/types/hospital.types';

type UseGeoLocationReturn = {
  coordinates: Coordinates | null;
  isLocationLoading: boolean;
  isLocationDenied: boolean;
};

const useGeoLocation = (): UseGeoLocationReturn => {
  const [isDenied, setIsDenied] = useState<boolean>(
    () => typeof window !== 'undefined' && !navigator.geolocation,
  );
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setIsDenied(true);
      },
    );
  }, []);

  return {
    coordinates,
    isLocationLoading: !isDenied && coordinates === null,
    isLocationDenied: isDenied,
  };
};

export default useGeoLocation;
