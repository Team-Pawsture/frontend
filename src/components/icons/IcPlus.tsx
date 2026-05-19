import type { IconProps } from '@/types/icon.types';

import { BaseIcon } from './BaseIcon';

export const IcPlus = (props: IconProps): React.ReactElement => (
  <BaseIcon viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </BaseIcon>
);
