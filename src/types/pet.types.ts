export type Breed =
  | 'POMERANIAN'
  | 'MALTESE'
  | 'TOY_POODLE'
  | 'MINIATURE_POODLE'
  | 'CHIHUAHUA'
  | 'YORKSHIRE_TERRIER'
  | 'SHIH_TZU'
  | 'BICHON_FRISE'
  | 'PEKINGESE'
  | 'MINIATURE_PINSCHER'
  | 'PAPILLON'
  | 'COCKER_SPANIEL'
  | 'BOSTON_TERRIER'
  | 'JACK_RUSSELL_TERRIER'
  | 'DACHSHUND'
  | 'FRENCH_BULLDOG'
  | 'PUG'
  | 'OTHER';

export type Gender = 'MALE' | 'FEMALE';

export interface Pet {
  pet_id: number;
  name: string;
  birth_date: string;
  breed: Breed;
  breed_etc?: string;
  gender: Gender;
  weight: number;
  profile_image_url: string | null;
}
