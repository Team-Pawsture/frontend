import { httpClient } from '@/apis/client';
import type { Pet, RegisterPetRequest } from '@/types/pet.types';

export const getPets = (): Promise<Pet[]> => httpClient.get<Pet[]>('/pets');

export const registerPet = (data: RegisterPetRequest): Promise<void> => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('birth_date', data.birthDate.replace(/\./g, '-'));
  formData.append('breed', data.breed);
  if (data.breedEtc) formData.append('breed_etc', data.breedEtc);
  formData.append('gender', data.gender);
  formData.append('weight', String(data.weight));
  data.medicalHistory.forEach((item) => formData.append('medical_history', item));
  if (data.medicalHistoryEtc) formData.append('medical_history_etc', data.medicalHistoryEtc);
  if (data.image) formData.append('image', data.image);

  return httpClient.post<void>('/pets', formData);
};
