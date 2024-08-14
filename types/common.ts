import { FC, SVGAttributes } from 'react';

export interface FcChildrenProps {
  children: React.ReactNode;
}

export type IconProp = {
  Icon: FC<SVGAttributes<SVGElement>>;
  title: string;
  url?: string;
};
