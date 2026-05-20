import type { Breed, Gender, MedicalHistory } from '@/types/pet.types';

export const BREED_LABEL: Record<Breed, string> = {
  POMERANIAN: '포메라니안',
  MALTESE: '말티즈',
  TOY_POODLE: '토이 푸들',
  MINIATURE_POODLE: '미니어처 푸들',
  CHIHUAHUA: '치와와',
  YORKSHIRE_TERRIER: '요크셔 테리어',
  SHIH_TZU: '시츄',
  BICHON_FRISE: '비숑프리제',
  PEKINGESE: '페키니즈',
  MINIATURE_PINSCHER: '미니어처 핀셔',
  PAPILLON: '파피용',
  COCKER_SPANIEL: '코커 스패니얼',
  BOSTON_TERRIER: '보스턴 테리어',
  JACK_RUSSELL_TERRIER: '잭 러셀 테리어',
  DACHSHUND: '닥스훈트',
  FRENCH_BULLDOG: '프렌치 불독',
  PUG: '퍼그',
  OTHER: '기타',
};

export const GENDER_LABEL: Record<Gender, string> = {
  MALE: '남아',
  FEMALE: '여아',
};

export const MEDICAL_HISTORY_LABEL: Record<MedicalHistory, string> = {
  NONE: '없음',
  PATELLA_LUXATION_DIAGNOSED: '슬개골 탈구 진단',
  PATELLA_SURGERY: '슬개골 수술 경험',
  HIP_DYSPLASIA: '고관절 이상',
  CRUCIATE_LIGAMENT_INJURY: '십자 인대 손상',
  DISC: '디스크',
  ARTHRITIS: '관절염',
  OBESITY: '비만',
  OTHER: '기타',
};
