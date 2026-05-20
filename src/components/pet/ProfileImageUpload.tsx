'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { IcPlus } from '@/components/icons';

interface ProfileImageUploadProps {
  onChange?: (file: File) => void;
}

export const ProfileImageUpload = ({ onChange }: ProfileImageUploadProps): React.ReactElement => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onChange?.(file);
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="flex flex-col items-center gap-2">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-blue-200 bg-gray-100"
      >
        {preview ? (
          <Image src={preview} alt="프로필 미리보기" fill className="object-cover" />
        ) : (
          <IcPlus size={24} className="text-blue-200" />
        )}
      </button>
      <p className="body3 text-gray-300">사진 추가 (선택)</p>
    </div>
  );
};
