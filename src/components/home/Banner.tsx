'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/common';
import { IcVideo } from '@/components/icons/IcVideo';

export const Banner = () => {
  const router = useRouter();
  const handleRedirectToAnalysis = () => {
    router.push('/analysis');
  };

  return (
    <div className="bg-primary rounded-lg p-8">
      <h2 className="head1 text-gray-0">
        반려견 슬개골 건강,
        <br />
        영상으로 확인하세요{' '}
      </h2>
      <p className="body2 py-2 text-blue-200">
        걷는 영상 하나로 관절 상태를
        <br />
        AI가 정밀 분석해드려요{' '}
      </p>
      <Button
        label="영상 분석하기"
        onClick={handleRedirectToAnalysis}
        icon={<IcVideo />}
        className="bg-gray-0 text-primary"
      />
    </div>
  );
};
