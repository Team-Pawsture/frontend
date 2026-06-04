'use client';

import { useRouter } from 'next/navigation';

import { RecentAnalysisCard } from '@/components/analysis';
import { Banner } from '@/components/home/Banner';
import useRecentAnalyses from '@/hooks/analysis/useRecentAnalyses';

const HomePage = (): React.ReactElement => {
  const router = useRouter();
  const { data: recentAnalyses } = useRecentAnalyses();

  return (
    <div className="flex flex-1 flex-col px-5">
      <Banner />
      <div className="my-4 flex flex-col gap-2">
        {recentAnalyses.length === 0 ? (
          <p className="body2 py-8 text-center text-gray-300">
            아직 분석 기록이 없어요. 영상을 분석해 보세요!
          </p>
        ) : (
          recentAnalyses.map((item) => (
            <RecentAnalysisCard
              key={item.analysisId}
              item={item}
              onClick={() => router.push(`/analysis/${item.analysisId}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
