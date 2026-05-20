import { Header } from '@/components/common/Header';

type PetLayoutProps = {
  children: React.ReactNode;
};

const PetLayout = ({ children }: PetLayoutProps): React.ReactElement => {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="scrollbar-hide flex flex-1 flex-col">{children}</main>
    </div>
  );
};

export default PetLayout;
