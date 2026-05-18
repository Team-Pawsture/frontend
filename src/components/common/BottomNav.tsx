'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IcHome } from '@/components/icons/IcHome';
import { IcLocation } from '@/components/icons/IcLocation';
import { IcUser } from '@/components/icons/IcUser';
import { IcVideo } from '@/components/icons/IcVideo';
import { cn } from '@/utils/cn';

const NAV_ITEMS = [
  { href: '/', label: '홈', icon: IcHome },
  { href: '/analysis', label: '분석', icon: IcVideo },
  { href: '/hospital', label: '병원', icon: IcLocation },
  { href: '/my', label: '마이', icon: IcUser },
];

export const BottomNav = (): React.ReactElement => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-0 sticky bottom-0 z-10 flex items-center justify-around border-t border-gray-200 px-2">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex flex-1 flex-col items-center gap-0.5 py-3',
              isActive ? 'text-primary' : 'text-gray-300',
            )}
          >
            <Icon size={24} />
            <span className="body3">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
