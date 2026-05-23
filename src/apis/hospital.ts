import { httpClient } from '@/apis/client';
import type { Coordinates, HospitalList, RecommendHospitalRequest } from '@/types/hospital.types';

export const getRecommendedHospitals = (params: RecommendHospitalRequest): Promise<HospitalList> =>
  httpClient.post<HospitalList>('/hospitals/recommend', {
    pet_id: params.petId,
    lat: params.lat,
    lng: params.lng,
  });

export const getNearbyHospitals = (coordinates: Coordinates): Promise<HospitalList> =>
  httpClient.get<HospitalList>(`/hospitals?lat=${coordinates.lat}&lng=${coordinates.lng}`);
