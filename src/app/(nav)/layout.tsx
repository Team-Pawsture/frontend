import { BottomNav } from '@/components/common/BottomNav';
import { Header } from '@/components/common/Header';

type NavLayoutProps = {
  children: React.ReactNode;
};

const NavLayout = ({ children }: NavLayoutProps): React.ReactElement => {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <BottomNav />
    </div>
  );
};

export default NavLayout;
