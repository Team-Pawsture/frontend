import { httpClient } from '@/apis/client';
import type {
  AnalysisCreateResult,
  AnalysisRequestParams,
  AnalysisResult,
  KeypointsResponse,
  PetAnalysisListResponse,
  RecentAnalysisItem,
  VideoUploadResult,
} from '@/types/analysis.types';

export const uploadVideo = (petId: number, video: File): Promise<VideoUploadResult> => {
  const formData = new FormData();
  formData.append('pet_id', String(petId));
  formData.append('video', video);

  return httpClient.post<VideoUploadResult>('/videos', formData);
};

export const requestAnalysis = ({
  petId,
  videoId,
  analysisStage,
  parentAnalysisId,
}: AnalysisRequestParams): Promise<AnalysisCreateResult> =>
  httpClient.post<AnalysisCreateResult>('/analyses', {
    pet_id: petId,
    video_id: videoId,
    ...(analysisStage !== undefined && { analysis_stage: analysisStage }),
    ...(parentAnalysisId !== undefined && { parent_analysis_id: parentAnalysisId }),
  });

export const getAnalysis = (analysisId: number): Promise<AnalysisResult> =>
  httpClient.get<AnalysisResult>(`/analyses/${analysisId}`);

export const getRecentAnalyses = (): Promise<RecentAnalysisItem[]> =>
  httpClient.get<RecentAnalysisItem[]>('/analyses/recent?limit=5');

export const getKeypoints = (analysisId: number): Promise<KeypointsResponse> =>
  httpClient.get<KeypointsResponse>(`/analyses/${analysisId}/keypoints`);

export const getAnalysesByPet = (
  petId: number,
  limit = 20,
  offset = 0,
): Promise<AnalysisResult[]> =>
  httpClient
    .get<PetAnalysisListResponse>(`/analyses?pet_id=${petId}&limit=${limit}&offset=${offset}`)
    .then((res) => res.items);
