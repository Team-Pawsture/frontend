'use client';

import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components/common';
import { RedirectButton } from '@/components/auth';
import useLoginForm from '@/hooks/auth/useLoginForm';

const LoginPage = (): React.ReactElement => {
  const router = useRouter();
  const { formData, errors, isFormValid, handleChange, handleBlur } = useLoginForm();

  const handleLogin = () => {
    if (!isFormValid) return;

    router.push('/home');
  };

  return (
    <div className="flex flex-col">
      <h2 className="head2 text-primary mb-4 text-center">로그인</h2>
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
      </div>
      <div className="fixed bottom-10 left-1/2 w-full max-w-107.5 -translate-x-1/2 px-5">
        <Button label="로그인" onClick={handleLogin} isDisabled={!isFormValid} />
        <RedirectButton description="계정이 없으신가요?" linkText="회원가입" to="/signup" />
      </div>
    </div>
  );
};

export default LoginPage;
