import { ImageProps, StaticImageData } from 'next/image';
import { FC, SVGAttributes } from 'react';

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
  title: string;
  icon?: string;
  className: string;
  full?: boolean;
  style?: Object;
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
