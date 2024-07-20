import { ImageProps, StaticImageData } from 'next/image';
import { ChangeEvent, FC, ReactElement, SVGAttributes } from 'react';

export interface FcChildProps {
  children: React.ReactNode;
}

export interface NavBarContentProps {
  title: string;
  url: string;
  icon?: FC<SVGAttributes<SVGElement>>;
}

export type NavBarStateProps = {
  isExpanded: boolean;
};

//Component types
export type ButtonProps = {
  type: 'button' | 'submit';
  title?: string;
  Icon?: FC<SVGAttributes<SVGElement>>;
  className: string;
  full?: boolean;
  style?: Object;
  // onClick?: () => {};
};

export type InputProps = {
  label?: string;
  stateName: string;
  inputType: 'number' | 'text' | 'email' | 'password' | 'range';
  value: number | string;
  disabled?: boolean;
  required?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  forForm?: string;
  info?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, inputType: string) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
};

export type TextCardProps = {
  id: string;
  title: string;
  subTitle?: string;
  content: string;
  actionButton?: ButtonProps;
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

export type ImageFrameProps = {
  id: string;
  imageContent: ImageProps;
  title?: string;
  style?: string;
};

export type revenueFormStateProps = {
  taxes: number;
  monthlyPlatformFee: number;
  productTransactionFee: number;
  monthlyOtherFee: number;
  quantitySold: number;
  retailPrice: number;
};

export type ProductProps = {
  id: string;
  type: 'T-Shirts' | 'Mugs' | 'Posters' | 'PhoneCases';
  title: string;
  price: number;
  images: StaticImageData[];
  onSale?: boolean;
  isAvailable?: boolean;
  colors?: Array<string>;
  sizes?: Array<string>;
  customizable?: boolean;
};

export type PrototypeComponentProps = {
  products: ProductProps[];
};

export type CustomTooltipProps = {
  children: ReactElement;
  title: string;
  // followCursor: boolean;
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
