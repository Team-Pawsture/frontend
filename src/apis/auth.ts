import { httpClient } from '@/apis/client';
import type { LoginRequest, LoginResult, SignupRequest, SignupResult } from '@/types/auth.types';

export const signup = (body: SignupRequest): Promise<SignupResult> =>
  httpClient.post<SignupResult>('/auth/signup', body);

export const login = (body: LoginRequest): Promise<LoginResult> =>
  httpClient.post<LoginResult>('/auth/login', body);
