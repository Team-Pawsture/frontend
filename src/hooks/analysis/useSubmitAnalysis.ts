import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestAnalysis, uploadVideo } from '@/apis/analysis';
import type { AnalysisStage } from '@/types/analysis.types';
import { ApiError } from '@/types/common/error.types';

interface SubmitAnalysisParams {
  petId: number;
  videoFile: File;
  analysisStage?: AnalysisStage;
  parentAnalysisId?: number;
}

const useSubmitAnalysis = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      petId,
      videoFile,
      analysisStage,
      parentAnalysisId,
    }: SubmitAnalysisParams) => {
      const videoUploadResult = await uploadVideo(petId, videoFile);
      const analysisResult = await requestAnalysis({
        petId,
        videoId: videoUploadResult.videoId,
        analysisStage,
        parentAnalysisId,
      });
      return analysisResult;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['analyses', 'recent'] });
    },
    onError: (error) => {
      const message =
        error instanceof ApiError ? error.message : '분석 요청 중 오류가 발생했습니다.';
      alert(message);
    },
  });
};

export default useSubmitAnalysis;
