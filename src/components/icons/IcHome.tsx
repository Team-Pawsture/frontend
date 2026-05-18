import type { IconProps } from '@/types/icon.types';

import { BaseIcon } from './BaseIcon';

export const IcHome = (props: IconProps): React.ReactElement => (
  <BaseIcon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
      fill="currentColor"
    />
  </BaseIcon>
);
