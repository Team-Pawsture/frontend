import { useQuery } from '@tanstack/react-query';

import { getPets } from '@/apis/pets';

const usePetList = () =>
  useQuery({
    queryKey: ['pets'],
    queryFn: getPets,
  });

export default usePetList;
