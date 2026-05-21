import { useState } from 'react';

import { login } from '@/apis/auth';
import { EMAIL_REGEX } from '@/constants/validation';
import { ApiError } from '@/types/common/error.types';
import { setToken } from '@/utils/token';

type UseLoginFormReturn = {
  formData: { email: string; password: string };
  errors: { email: string; password: string };
  isFormValid: boolean;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (onSuccess: () => void) => Promise<void>;
};

const useLoginForm = (): UseLoginFormReturn => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: false }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const errors = {
    email:
      touched.email && formData.email.length > 0 && !EMAIL_REGEX.test(formData.email)
        ? '올바른 이메일 형식이 아니에요'
        : '',
    password: '',
  };

  const isFormValid = EMAIL_REGEX.test(formData.email) && formData.password.length > 0;

  const handleSubmit = async (onSuccess: () => void): Promise<void> => {
    if (!isFormValid) return;

    setIsLoading(true);

    try {
      const result = await login({ username: formData.email, password: formData.password });
      setToken(result.accessToken);
      onSuccess();
    } catch (error) {
      if (!(error instanceof ApiError)) {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
        return;
      }
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, errors, isFormValid, isLoading, handleChange, handleBlur, handleSubmit };
};

export default useLoginForm;
