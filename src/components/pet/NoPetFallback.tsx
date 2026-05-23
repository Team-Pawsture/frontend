import Link from 'next/link';

interface NoPetFallbackProps {
  description?: string;
}

export const NoPetFallback = ({
  description = '반려견을 등록하고 다양한 기능을 이용해보세요',
}: NoPetFallbackProps): React.ReactElement => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-5">
      <div className="flex flex-col items-center gap-1.5">
        <p className="subhead3 text-gray-400">아직 등록된 반려견이 없어요</p>
        <p className="body2 text-gray-300">{description}</p>
      </div>
      <Link
        href="/pet/new"
        className="body1 text-primary border-primary rounded-full border px-7 py-2.5"
      >
        등록하러 가기
      </Link>
    </div>
  );
};
