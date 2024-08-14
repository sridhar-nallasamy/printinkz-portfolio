import { ButtonProps } from '@mui/material';
import { FC, SVGAttributes } from 'react';

export interface CustomButtonProps extends ButtonProps {
  type: 'button' | 'submit';
  title?: string;
  Icon?: FC<SVGAttributes<SVGElement>>;
  className: string;
  full?: boolean;
  style?: Object;
}
