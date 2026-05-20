import { IcCheck } from '@/components/icons';

export const RegistrationCompleteCard = (): React.ReactElement => (
  <div className="flex flex-col items-center rounded-lg bg-blue-50 py-10">
    <div className="bg-primary flex h-16 w-16 items-center justify-center rounded-full">
      <IcCheck size={30} className="text-gray-0" />
    </div>
    <h1 className="title1 mt-4">등록 완료</h1>
    <p className="body1 mt-2 text-center text-gray-300">
      이제 영상을 업로드해서
      <br />
      관절 상태를 분석할 수 있어요
    </p>
  </div>
);
