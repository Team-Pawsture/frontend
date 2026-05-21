import axios, { AxiosError } from 'axios';
import camelcaseKeys from 'camelcase-keys';

import type { ApiErrorResponse, ApiResponse } from '@/types/common/api.types';
import { ApiError } from '@/types/common/error';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

client.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true });
    }
    return response;
  },
  (error: AxiosError<ApiErrorResponse>) => {
    const status = error.response?.status ?? 0;
    const data = error.response?.data;
    return Promise.reject(
      new ApiError(data?.code ?? 'UNKNOWN', status, data?.message ?? error.message),
    );
  },
);

export const httpClient = {
  get: <T>(url: string): Promise<T> =>
    client.get<ApiResponse<T>>(url).then(({ data }) => data.result),
  post: <T>(url: string, body?: unknown): Promise<T> =>
    client.post<ApiResponse<T>>(url, body).then(({ data }) => data.result),
};

export default client;
