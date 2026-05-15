import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Pawsture',
  description: '반려견 슬개골 탈구 방지 걸음 분석 서비스',
};

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement => {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full`}>
      <body className="font-pretendard flex h-full flex-col bg-neutral-100 antialiased">
        <div className="mx-auto flex min-h-full w-full max-w-107.5 flex-1 flex-col bg-white">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
