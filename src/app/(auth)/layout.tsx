import { Icon } from '@/components/icons';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps): React.ReactElement => {
  return (
    <div className="px-5">
      <header className="flex h-17.5 items-center gap-2">
        <Icon size={30} />
        <h1 className="title2">Pawsture</h1>
      </header>
      {children}
    </div>
  );
};

export default AuthLayout;
