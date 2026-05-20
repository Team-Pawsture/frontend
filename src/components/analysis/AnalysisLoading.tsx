import React from 'react';

interface AnalysisLoadingProps {
  petName: string;
  progress: number;
}

export const AnalysisLoading = ({
  petName,
  progress,
}: AnalysisLoadingProps): React.ReactElement => {
  return (
    <div className="flex flex-col justify-between px-5 py-10">
      <div className="mt-40 flex flex-col items-center justify-center gap-2">
        <h1 className="head2 text-center text-gray-400">
          {petName}의 상태를
          <br />
          분석하고 있어요
        </h1>
        <p className="body2 text-gray-300">잠시만 기다려주세요</p>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-75 flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="body2 text-gray-300">분석중</span>
          <span className="body2 text-primary">{progress}%</span>
        </div>
        <div
          className="h-2.5 w-full overflow-hidden rounded-full bg-blue-100"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${petName} 분석 진행률`}
        >
          <div
            className="bg-primary h-full rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
