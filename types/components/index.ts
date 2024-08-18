import { ButtonProps } from '@mui/material';
import { ImageProps, StaticImageData } from 'next/image';
import { FC, ReactElement, SVGAttributes } from 'react';

export interface CustomButtonProps extends ButtonProps {
  type: 'button' | 'submit';
  title?: string;
  Icon?: FC<SVGAttributes<SVGElement>>;
  className: string;
  full?: boolean;
  style?: Object;
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
