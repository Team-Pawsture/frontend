export type OperationStatus = 'before_open' | 'open' | 'closed' | null;

export type HospitalSortType = 'recommended' | 'distance';

export interface Hospital {
  hospital_id: number | null;
  name: string;
  address: string;
  phone: string | null;
  latitude: number;
  longitude: number;
  distance_meters: number;
  specialty: string | null;
  certifications: string[];
  image_url: string | null;
  today_hours: string | null;
  operation_status: OperationStatus;
  map_url: string | null;
}

export interface HospitalListResponse {
  total: number;
  hospitals: Hospital[];
}
