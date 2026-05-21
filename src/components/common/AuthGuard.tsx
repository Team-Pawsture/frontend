'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getToken } from '@/utils/token';

type AuthGuardProps = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: AuthGuardProps): React.ReactElement | null => {
  const router = useRouter();
  const [isAuthorized] = useState(() => !!getToken());

  useEffect(() => {
    if (!isAuthorized) {
      router.replace('/login');
    }
  }, [isAuthorized, router]);

  if (!isAuthorized) return null;

  return <>{children}</>;
};
