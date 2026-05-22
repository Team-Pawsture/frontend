import { useMutation, useQueryClient } from '@tanstack/react-query';

import { registerPet } from '@/apis/pets';
import type { RegisterPetRequest } from '@/types/pet.types';

const useRegisterPet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RegisterPetRequest) => registerPet(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'] });
    },
  });
};

export default useRegisterPet;
