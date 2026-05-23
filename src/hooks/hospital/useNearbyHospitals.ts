import { useQuery } from '@tanstack/react-query';

import { getNearbyHospitals } from '@/apis/hospital';
import type { Coordinates, HospitalList } from '@/types/hospital.types';

type UseNearbyHospitalsArgs = {
  coordinates: Coordinates | null;
};

type UseNearbyHospitalsReturn = {
  data: HospitalList | undefined;
  isLoading: boolean;
};

const useNearbyHospitals = ({ coordinates }: UseNearbyHospitalsArgs): UseNearbyHospitalsReturn => {
  const isEnabled = coordinates !== null;

  const { data, isLoading } = useQuery({
    queryKey: ['hospitals', 'nearby', coordinates?.lat, coordinates?.lng],
    queryFn: () => getNearbyHospitals(coordinates!),
    enabled: isEnabled,
  });

  return {
    data,
    isLoading: isEnabled && isLoading,
  };
};

export default useNearbyHospitals;
