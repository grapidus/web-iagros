declare module 'react-icons/bs' {
  import { FC, SVGProps } from 'react';

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }

  export const BsList: FC<IconProps>;
  export const BsX: FC<IconProps>;
  export const BsChevronDown: FC<IconProps>;
}
