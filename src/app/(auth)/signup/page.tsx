'use client';

import { useRouter } from 'next/navigation';

import { RedirectButton } from '@/components/auth';
import { Button, Input } from '@/components/common';
import useSignupForm from '@/hooks/auth/useSignupForm';

const SignupPage = (): React.ReactElement => {
  const router = useRouter();
  const { formData, errors, isFormValid, isLoading, handleChange, handleBlur, handleSubmit } =
    useSignupForm();

  const handleSignup = async (): Promise<void> => {
    await handleSubmit(() => router.push('/login'));
  };

  return (
    <div className="flex flex-col">
      <h2 className="head2 text-primary mb-4 text-center">회원가입</h2>
      <div className="flex flex-col gap-2">
        <Input
          name="email"
          label="이메일"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <Input
          name="password"
          label="비밀번호"
          type="password"
          placeholder="영문, 숫자를 포함하여 8자 이상 입력하세요"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
        />
        <Input
          name="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한 번 더 입력하세요"
          value={formData.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.passwordConfirm}
        />
      </div>
      <div className="fixed bottom-10 left-1/2 w-full max-w-107.5 -translate-x-1/2 px-5">
        <Button label="회원가입" onClick={handleSignup} isDisabled={!isFormValid || isLoading} />
        <RedirectButton description="이미 계정이 있으신가요?" linkText="로그인" to="/login" />
      </div>
    </div>
  );
};

export default SignupPage;
