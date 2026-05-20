import { IcLogo } from '@/components/icons';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps): React.ReactElement => {
  return (
    <div className="px-5">
      <header className="flex h-17.5 items-center">
        <IcLogo />
      </header>
      {children}
    </div>
  );
};

export default AuthLayout;
