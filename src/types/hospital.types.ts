export type OperationStatus = 'before_open' | 'open' | 'closed' | null;

export type HospitalSortType = 'recommended' | 'distance';

export interface Hospital {
  hospitalId: number | null;
  name: string;
  address: string;
  phone: string | null;
  latitude: number;
  longitude: number;
  distanceMeters: number;
  specialty: string | null;
  certifications: string[];
  imageUrl: string | null;
  todayHours: string | null;
  operationStatus: OperationStatus;
  mapUrl: string | null;
}

export interface HospitalListResponse {
  total: number;
  hospitals: Hospital[];
}
