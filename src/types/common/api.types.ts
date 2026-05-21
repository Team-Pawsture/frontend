export type ApiResponse<T> = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
};

export type ApiErrorResponse = {
  isSuccess: false;
  code: string;
  message: string;
  result: Record<string, string> | null;
};
