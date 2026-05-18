import Image from 'next/image';
import React from 'react';

import type { Pet } from '@/types/pet.types';
import { cn } from '@/utils/cn';

interface PetSelectorProps {
  pets: Pet[];
  selectedPetId: number | null;
  onSelect: (petId: number) => void;
}

export const PetSelector = ({
  pets,
  selectedPetId,
  onSelect,
}: PetSelectorProps): React.ReactElement => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="subhead6 px-5 text-gray-400">반려견 선택</h2>
      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-5 pb-1">
        {pets.map((pet) => (
          <button
            key={pet.pet_id}
            type="button"
            onClick={() => onSelect(pet.pet_id)}
            className="flex shrink-0 flex-col items-center gap-2"
          >
            <div
              className={cn(
                'relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2',
                selectedPetId === pet.pet_id ? 'border-primary' : 'border-gray-200',
                !pet.profile_image_url && 'bg-blue-100',
              )}
            >
              {pet.profile_image_url ? (
                <Image src={pet.profile_image_url} alt={pet.name} fill className="object-cover" />
              ) : (
                <span className="subhead6 text-primary">{pet.name[0]}</span>
              )}
            </div>
            <span
              className={cn(
                selectedPetId === pet.pet_id ? 'body2 text-gray-400' : 'body3 text-gray-300',
              )}
            >
              {pet.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
