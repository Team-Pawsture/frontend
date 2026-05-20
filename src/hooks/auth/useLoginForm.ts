import { useState } from 'react';
import { EMAIL_REGEX } from '@/constants/validation';

type UseLoginFormReturn = {
  formData: { email: string; password: string };
  errors: { email: string; password: string };
  isFormValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const useLoginForm = (): UseLoginFormReturn => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });

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

  return { formData, errors, isFormValid, handleChange, handleBlur };
};

export default useLoginForm;
