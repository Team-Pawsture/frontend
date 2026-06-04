import { AuthGuard, BottomNav } from '@/components/common';
import { Header } from '@/components/common/Header';

type NavLayoutProps = {
  children: React.ReactNode;
};

const NavLayout = ({ children }: NavLayoutProps): React.ReactElement => {
  return (
    <AuthGuard>
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="scrollbar-hide flex flex-1 flex-col">{children}</main>
        <BottomNav />
      </div>
    </AuthGuard>
  );
};

export default NavLayout;
