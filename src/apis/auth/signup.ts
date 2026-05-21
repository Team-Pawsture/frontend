import { httpClient } from '@/apis/client';
import type { SignupRequest, SignupResult } from '@/types/auth.types';

export const signup = (body: SignupRequest): Promise<SignupResult> =>
  httpClient.post<SignupResult>('/auth/signup', body);
