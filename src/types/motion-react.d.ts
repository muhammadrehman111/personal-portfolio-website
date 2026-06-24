declare module 'motion/react' {
  import {
    DetailedHTMLProps,
    HTMLAttributes,
    AnchorHTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
    SVGProps,
  } from 'react';

  interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    onClick?: any;
    onMouseEnter?: any;
    onMouseLeave?: any;
  }

  interface MotionDivProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      MotionProps {}

  interface MotionAProps
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
      MotionProps {}

  interface MotionComponents {
    div: ForwardRefExoticComponent<MotionDivProps & RefAttributes<HTMLDivElement>>;
    a: ForwardRefExoticComponent<MotionAProps & RefAttributes<HTMLAnchorElement>>;
    [key: string]: any;
  }

  export const motion: MotionComponents;
}
