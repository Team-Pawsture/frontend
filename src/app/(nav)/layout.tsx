import { Header } from '@/components/common';

type NavLayoutProps = {
  children: React.ReactNode;
};

const NavLayout = ({ children }: NavLayoutProps): React.ReactElement => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default NavLayout;
