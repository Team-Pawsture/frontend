'use client';

import { useRouter } from 'next/navigation';
import { startTransition, useEffect, useState } from 'react';

import { getToken } from '@/utils/token';

type AuthGuardProps = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: AuthGuardProps): React.ReactElement | null => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      router.replace('/login');
    } else {
      startTransition(() => setIsAuthorized(true));
    }
  }, [router]);

  if (!isAuthorized) return null;

  return <>{children}</>;
};
