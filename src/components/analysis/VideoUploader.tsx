'use client';

import React, { useRef } from 'react';

import { IcVideo } from '@/components/icons';

interface VideoUploaderProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
}

const formatFileSize = (bytes: number): string => {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)}MB`;
};

export const VideoUploader = ({ file, onFileChange }: VideoUploaderProps): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => inputRef.current?.click();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ?? null;
    onFileChange(selectedFile);
  };

  return (
    <section className="flex flex-col gap-3">
      <h2 className="subhead6 text-gray-400">동영상 선택</h2>
      <button
        type="button"
        onClick={handleClick}
        className="flex min-h-32 w-full flex-col items-center justify-center gap-2 rounded-(--radius-md) border border-blue-200 bg-blue-100 p-6"
      >
        <IcVideo size={36} className="text-primary" />
        {file ? (
          <>
            <span className="body2 text-gray-400">{file.name}</span>
            <span className="body3 text-gray-300">{formatFileSize(file.size)} 업로드 완료</span>
          </>
        ) : (
          <span className="body3 text-gray-300">동영상을 선택해주세요</span>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleChange}
      />
    </section>
  );
};
