import { SvgIconComponent } from '@mui/icons-material';
import { ButtonProps, InputProps, TooltipProps } from '@mui/material';
import {
  ChangeEvent,
  FC,
  FocusEvent,
  ReactElement,
  SVGAttributes,
} from 'react';
import { ImageProps, StaticImageData } from 'next/image';

export interface CustomIconProps {
  Icon: SvgIconComponent;
}

export interface CustomButtonProps extends ButtonProps {
  type: 'button' | 'submit';
  title?: string;
  Icon?: FC<SVGAttributes<SVGElement>> | SvgIconComponent;
  className: string;
  full?: boolean;
  style?: Object;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CustomInputProps extends InputProps {
  type: string;
  label?: string;
  info?: string;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: FocusEvent<any>) => void;
  helperText?: string | React.ReactNode;
  inputProp?: 'Rs' | '%';
}

export interface CustomTooltipProps extends TooltipProps {
  children: ReactElement;
  title: string;
  // followCursor: boolean;
}

export type TextCardProps = {
  id: string;
  title: string;
  subTitle?: string;
  content: string;
  actionButton?: CustomButtonProps;
  listing?: string[];
  style?: string;
};

export type ImageCardProps = {
  id: string;
  title: string;
  srcImage: StaticImageData;
  url: string;
  style?: string;
};

export type TextImageCardProps = {
  id: string;
  textContent: TextCardProps;
  imageContent: ImageProps;
  style?: string;
};

export type paginationWrapperProps = {
  totalContents: number;
  contentsPerPage: number;
  handleCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
  activePage: number;
};

export type ScrollableWrapperProps = {
  children: React.ReactNode;
  id: string;
};

export type ImageFrameProps = {
  id: string;
  imageContent: ImageProps;
  title?: string;
  style?: string;
};

export type ProductProps = {
  id: string;
  type: 'T-Shirts' | 'Mugs' | 'Posters' | 'PhoneCases';
  title: string;
  price: number;
  images: ImageListProps[];
  onSale?: boolean;
  isAvailable?: boolean;
  colors?: Array<string>;
  sizes?: Array<string>;
  customizable?: boolean;
};

export type ImageListProps = {
  image: StaticImageData;
  imageTitle: string;
};

export type ImageListNavigatorProps = {
  imageList: ImageListProps[];
};

export type PrototypeComponentProps = {
  product: ProductProps[];
};

export type CustomerProps = {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: number;
  profession?: string;
  printInkzFeedback?: FeedbackProps;
  productsFeedback?: Array<Object>;
};

export type FeedbackProps = {
  id: string;
  rating: number;
  feedback: string;
};

export type FeedbackComponentProps = {
  feedback: CustomerProps;
};

export type StarRatingComponentProps = {
  rating: number;
};
