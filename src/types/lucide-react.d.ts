declare module 'lucide-react' {
  import { FC, SVGAttributes } from 'react';
  
  interface IconProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }
  
  export const ExternalLink: FC<IconProps>;
  export const Github: FC<IconProps>;
  export const X: FC<IconProps>;
}
