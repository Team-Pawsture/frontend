import { httpClient } from '@/apis/client';
import type {
  AnalysisCreateResult,
  AnalysisResult,
  RecentAnalysisItem,
  VideoUploadResult,
} from '@/types/analysis.types';

export const uploadVideo = (petId: number, video: File): Promise<VideoUploadResult> => {
  const formData = new FormData();
  formData.append('pet_id', String(petId));
  formData.append('video', video);

  return httpClient.post<VideoUploadResult>('/videos', formData);
};

export const requestAnalysis = (petId: number, videoId: number): Promise<AnalysisCreateResult> =>
  httpClient.post<AnalysisCreateResult>('/analyses', { pet_id: petId, video_id: videoId });

export const getAnalysis = (analysisId: number): Promise<AnalysisResult> =>
  httpClient.get<AnalysisResult>(`/analyses/${analysisId}`);

export const getRecentAnalyses = (): Promise<RecentAnalysisItem[]> =>
  httpClient.get<RecentAnalysisItem[]>('/analyses/recent?limit=5');
