import { useQuery } from '@tanstack/react-query';

import { getRecommendedHospitals } from '@/apis/hospital';
import type { Coordinates, HospitalList } from '@/types/hospital.types';

type UseRecommendedHospitalsArgs = {
  petId: number | null;
  coordinates: Coordinates | null;
};

type UseRecommendedHospitalsReturn = {
  data: HospitalList | undefined;
  isLoading: boolean;
};

const useRecommendedHospitals = ({
  petId,
  coordinates,
}: UseRecommendedHospitalsArgs): UseRecommendedHospitalsReturn => {
  const isEnabled = petId !== null && coordinates !== null;

  const { data, isLoading } = useQuery({
    queryKey: ['hospitals', 'recommend', petId, coordinates?.lat, coordinates?.lng],
    queryFn: () =>
      getRecommendedHospitals({
        petId: petId!,
        lat: coordinates!.lat,
        lng: coordinates!.lng,
      }),
    enabled: isEnabled,
  });

  return {
    data,
    isLoading: isEnabled && isLoading,
  };
};

export default useRecommendedHospitals;
