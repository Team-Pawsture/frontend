import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Pawsture',
  description: '반려견 슬개골 탈구 방지 걸음 분석 서비스',
  manifest: '/manifest.json',
};

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--pretendard',
  display: 'swap',
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement => {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full`}>
      <body className="font-pretendard vsc-initialized flex min-h-full flex-col bg-gray-100 antialiased">
        <div className="bg-gray-0 mx-auto flex min-h-full w-full max-w-107.5 flex-1 flex-col">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
