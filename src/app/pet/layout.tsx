import { AuthGuard } from '@/components/common';
import { Header } from '@/components/common/Header';

type PetLayoutProps = {
  children: React.ReactNode;
};

const PetLayout = ({ children }: PetLayoutProps): React.ReactElement => {
  return (
    <AuthGuard>
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="scrollbar-hide flex flex-1 flex-col">{children}</main>
      </div>
    </AuthGuard>
  );
};

export default PetLayout;
