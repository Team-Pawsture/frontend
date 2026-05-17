import { useState } from 'react';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/validation';

const useSignupForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '', passwordConfirm: '' });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

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

  return { formData, errors, isFormValid, handleChange, handleBlur };
};

export default useSignupForm;
