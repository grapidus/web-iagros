declare module 'react-icons/bs' {
  import { FC, SVGProps } from 'react';

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }

  export const BsList: FC<IconProps>;
  export const BsX: FC<IconProps>;
  export const BsChevronDown: FC<IconProps>;
}

declare module 'react-icons/fa' {
  import { FC, SVGProps } from 'react';

  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }

  export const FaChevronLeft: FC<IconProps>;
  export const FaChevronRight: FC<IconProps>;
  export const FaFacebookF: FC<IconProps>;
  export const FaTwitter: FC<IconProps>;
  export const FaInstagram: FC<IconProps>;
  export const FaLinkedinIn: FC<IconProps>;
}
