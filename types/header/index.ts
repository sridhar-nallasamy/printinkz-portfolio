import { FC, SVGAttributes } from 'react';

export interface NavBarContentProps {
  title: string;
  url: string;
  icon?: FC<SVGAttributes<SVGElement>>;
}

export type NavBarStateProps = {
  isExpanded: boolean;
};
