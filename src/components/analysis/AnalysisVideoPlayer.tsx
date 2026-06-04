'use client';

import React, { useEffect, useRef } from 'react';

import useKeypoints from '@/hooks/analysis/useKeypoints';
import type { KeypointFrame } from '@/types/analysis.types';

type Props = {
  videoUrl: string;
  analysisId: number;
};

const SKELETON_CONNECTIONS: [string, string][] = [
  // 상체
  ['ear', 'dorsal_scapular_spine'],
  ['dorsal_scapular_spine', 't13_spinous_process'],
  ['t13_spinous_process', 'iliac_crest'],
  ['iliac_crest', 'hip'],
  // 전지
  ['dorsal_scapular_spine', 'shoulder'],
  ['shoulder', 'elbow'],
  ['elbow', 'wrist'],
  ['wrist', 'front_paw'],
  // 후지
  ['hip', 'knee'],
  ['knee', 'hock'],
  ['hock', 'hind_paw'],
];

const KEYPOINT_COLORS: Record<string, string> = {
  ear: '#FF6B6B',
  dorsal_scapular_spine: '#6BCB77',
  t13_spinous_process: '#6BCB77',
  iliac_crest: '#6BCB77',
  shoulder: '#FFD93D',
  elbow: '#FFD93D',
  wrist: '#FFD93D',
  front_paw: '#FFD93D',
  hip: '#4D96FF',
  knee: '#4D96FF',
  hock: '#4D96FF',
  hind_paw: '#4D96FF',
};

const drawSkeleton = (
  ctx: CanvasRenderingContext2D,
  frame: KeypointFrame,
  scaleX: number,
  scaleY: number,
  offsetX: number,
  offsetY: number,
): void => {
  const pointMap = new Map<string, { x: number; y: number }>();

  for (const kp of frame.keypoints) {
    if (kp.x !== null && kp.y !== null) {
      pointMap.set(kp.canonicalName, {
        x: kp.x * scaleX + offsetX,
        y: kp.y * scaleY + offsetY,
      });
    }
  }

  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
  for (const [from, to] of SKELETON_CONNECTIONS) {
    const a = pointMap.get(from);
    const b = pointMap.get(to);
    if (a && b) {
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }

  for (const [canonical, point] of pointMap) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = KEYPOINT_COLORS[canonical] ?? '#FFFFFF';
    ctx.fill();
  }
};

const AnalysisVideoPlayer = ({ videoUrl, analysisId }: Props): React.ReactElement => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  const { data: keypointsData } = useKeypoints(analysisId);

  const sortedFramesRef = useRef<KeypointFrame[]>([]);
  const totalFrameCountRef = useRef<number>(0);

  useEffect(() => {
    if (!keypointsData) return;
    totalFrameCountRef.current = keypointsData.totalFrameCount;
    sortedFramesRef.current = [...keypointsData.frames]
      .filter((f) => f.keypoints.length > 0)
      .sort((a, b) => a.frameIndex - b.frameIndex);
  }, [keypointsData]);

  useEffect(() => {
    const draw = (): void => {
      rafRef.current = requestAnimationFrame(draw);

      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      if (canvas.width !== video.clientWidth || canvas.height !== video.clientHeight) {
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const frames = sortedFramesRef.current;
      if (!frames.length || video.readyState < 1 || video.duration === 0) return;

      const videoAspect = video.videoWidth / video.videoHeight;
      const containerAspect = canvas.width / canvas.height;

      let displayWidth: number;
      let displayHeight: number;
      let offsetX: number;
      let offsetY: number;

      if (videoAspect > containerAspect) {
        displayWidth = canvas.width;
        displayHeight = canvas.width / videoAspect;
        offsetX = 0;
        offsetY = (canvas.height - displayHeight) / 2;
      } else {
        displayHeight = canvas.height;
        displayWidth = canvas.height * videoAspect;
        offsetX = (canvas.width - displayWidth) / 2;
        offsetY = 0;
      }

      const scaleX = displayWidth / video.videoWidth;
      const scaleY = displayHeight / video.videoHeight;

      const fps = totalFrameCountRef.current / video.duration;
      const currentFrameIndex = Math.floor(video.currentTime * fps);

      let lo = 0;
      let hi = frames.length - 1;
      let targetFrame: KeypointFrame | undefined;

      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (frames[mid].frameIndex <= currentFrameIndex) {
          targetFrame = frames[mid];
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }

      if (targetFrame) {
        drawSkeleton(ctx, targetFrame, scaleX, scaleY, offsetX, offsetY);
      }
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative w-full">
      <video ref={videoRef} src={videoUrl} controls className="w-full rounded-lg" />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full rounded-lg"
      />
    </div>
  );
};

export { AnalysisVideoPlayer };
