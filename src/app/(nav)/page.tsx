import { AnalysisHistoryCard } from '@/components/analysis';
import { Banner } from '@/components/home/Banner';
import { MOCK_ANALYSIS_HISTORY_LIST } from '@/mocks';

const HomePage = (): React.ReactElement => {
  return (
    <div className="flex flex-1 flex-col px-5">
      <Banner />
      <div className="my-4 flex flex-col gap-2">
        {MOCK_ANALYSIS_HISTORY_LIST.map((history) => (
          <AnalysisHistoryCard key={history.job_id} history={history} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
