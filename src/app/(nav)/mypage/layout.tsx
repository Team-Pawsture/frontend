import { Suspense } from 'react';

type MyPageLayoutProps = {
  children: React.ReactNode;
};

const MyPageLayout = ({ children }: MyPageLayoutProps): React.ReactElement => (
  <Suspense>{children}</Suspense>
);

export default MyPageLayout;
