'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/common';
import { IcPlus } from '@/components/icons';
import { RegistrationCompleteCard } from '@/components/pet';

const PetSuccessPage = (): React.ReactElement => {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col p-5">
      <RegistrationCompleteCard />
      <div className="mt-10 flex flex-col items-center gap-1.5">
        <p className="subhead4">다른 반려견도 등록할까요?</p>
        <p className="body3 text-gray-300">언제든 마이페이지에서 추가 가능해요</p>
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-8">
        <Button
          label="반려견 추가 등록"
          onClick={() => router.push('/pet/new')}
          icon={<IcPlus size={20} className="text-primary" />}
          className="border-primary text-primary bg-gray-0 border"
        />
        <Button label="홈으로 이동" onClick={() => router.push('/')} />
      </div>
    </div>
  );
};

export default PetSuccessPage;
