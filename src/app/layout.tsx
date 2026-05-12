import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Pawsture',
  description: '반려견 슬개골 탈구 방지 걸음 분석 서비스',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement => {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="vsc-initialized flex min-h-full flex-col bg-neutral-100">
        <div className="mx-auto flex w-full max-w-107.5 flex-1 flex-col bg-white">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
