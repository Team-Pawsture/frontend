import Link from 'next/link';

import { IcLogo } from '@/components/icons';

export const Header = (): React.ReactElement => {
  return (
    <div className="bg-gray-0 sticky top-0 z-10 flex h-15 items-center px-5">
      <Link href="/">
        <IcLogo />
      </Link>
    </div>
  );
};
