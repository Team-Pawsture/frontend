import { useState } from 'react';

import { signup } from '@/apis/auth/signup';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/validation';
import { ApiError } from '@/types/common/error';

type UseSignupFormReturn = {
  formData: { email: string; password: string; passwordConfirm: string };
  errors: { email: string; password: string; passwordConfirm: string };
  serverError: string;
  isFormValid: boolean;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (onSuccess: () => void) => Promise<void>;
};

const useSignupForm = (): UseSignupFormReturn => {
  const [formData, setFormData] = useState({ email: '', password: '', passwordConfirm: '' });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });
  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: false }));
    setServerError('');
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
    password:
      touched.password && formData.password.length > 0 && !PASSWORD_REGEX.test(formData.password)
        ? '영문, 숫자를 포함하여 8자 이상 입력하세요'
        : '',
    passwordConfirm:
      touched.passwordConfirm &&
      formData.passwordConfirm.length > 0 &&
      formData.password !== formData.passwordConfirm
        ? '비밀번호가 일치하지 않아요'
        : '',
  };

  const isFormValid =
    EMAIL_REGEX.test(formData.email) &&
    PASSWORD_REGEX.test(formData.password) &&
    formData.password === formData.passwordConfirm;

  const handleSubmit = async (onSuccess: () => void): Promise<void> => {
    if (!isFormValid) return;

    setIsLoading(true);
    setServerError('');

    try {
      await signup({ username: formData.email, password: formData.password });
      onSuccess();
    } catch (error) {
      if (!(error instanceof ApiError)) {
        setServerError('오류가 발생했습니다. 다시 시도해주세요.');
        return;
      }

      alert(error.message);
      setServerError(error.message ?? '오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    serverError,
    isFormValid,
    isLoading,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useSignupForm;
