import type { AnalysisHistoryItem } from '@/types/analysis.types';
import type { Pet } from '@/types/pet.types';

export const MOCK_ANALYSIS_HISTORY_LIST: AnalysisHistoryItem[] = [
  {
    job_id: 'job_1',
    pet_id: 1,
    name: '뭉치',
    created_at: '2026-05-19T17:00:00+09:00',
    risk_level: 'high',
  },
  {
    job_id: 'job_2',
    pet_id: 2,
    name: '두부',
    created_at: '2026-05-18T17:00:00+09:00',
    risk_level: 'suspicious',
  },
  {
    job_id: 'job_3',
    pet_id: 2,
    name: '두부',
    created_at: '2026-05-17T17:00:00+09:00',
    risk_level: 'uncertain',
  },
  {
    job_id: 'job_4',
    pet_id: 1,
    name: '뭉치',
    created_at: '2026-05-16T17:00:00+09:00',
    risk_level: 'suspicious',
  },
  {
    job_id: 'job_5',
    pet_id: 1,
    name: '뭉치',
    created_at: '2026-05-15T17:00:00+09:00',
    risk_level: 'low_signal',
  },
];

export const MOCK_PET_LIST: Pet[] = [
  {
    pet_id: 1,
    name: '두부',
    birth_date: '2020-01-01',
    breed: 'POMERANIAN',
    gender: 'MALE',
    weight: 3.5,
    profile_image_url: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
  },
  {
    pet_id: 2,
    name: '뭉치',
    birth_date: '2019-06-15',
    breed: 'MALTESE',
    gender: 'FEMALE',
    weight: 4.2,
    profile_image_url: null,
  },
  {
    pet_id: 3,
    name: '콩이',
    birth_date: '2014-03-05',
    breed: 'TOY_POODLE',
    gender: 'FEMALE',
    weight: 5.0,
    profile_image_url: null,
  },
  {
    pet_id: 4,
    name: '초코',
    birth_date: '2022-11-20',
    breed: 'OTHER',
    breed_etc: '믹스견',
    gender: 'MALE',
    weight: 6.8,
    profile_image_url: null,
  },
  {
    pet_id: 5,
    name: '구름',
    birth_date: '2021-08-10',
    breed: 'MINIATURE_POODLE',
    gender: 'FEMALE',
    weight: 4.5,
    profile_image_url: null,
  },
  {
    pet_id: 6,
    name: '별이',
    birth_date: '2018-12-25',
    breed: 'CHIHUAHUA',
    gender: 'FEMALE',
    weight: 2.3,
    profile_image_url: null,
  },
];
