import { useMutation } from '@tanstack/react-query';

import { requestAnalysis, uploadVideo } from '@/apis/analysis';
import { ApiError } from '@/types/common/error.types';

interface SubmitAnalysisParams {
  petId: number;
  videoFile: File;
}

const useSubmitAnalysis = () =>
  useMutation({
    mutationFn: async ({ petId, videoFile }: SubmitAnalysisParams) => {
      const videoUploadResult = await uploadVideo(petId, videoFile);
      const analysisResult = await requestAnalysis(petId, videoUploadResult.videoId);
      return analysisResult;
    },
    onError: (error) => {
      const message =
        error instanceof ApiError ? error.message : '분석 요청 중 오류가 발생했습니다.';
      alert(message);
    },
  });

export default useSubmitAnalysis;
