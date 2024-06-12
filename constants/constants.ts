import {
  ImageCardProps,
  NavBarContentProps,
  TextImageCardProps,
} from '@/types/common';
import container_02_img_01 from '@/assets/svgs/container_02/1.png';
import container_02_img_02 from '@/assets/svgs/container_02/2.png';
import container_02_img_03 from '@/assets/svgs/container_02/3.png';
import container_01_img from '@/assets/svgs/container_01.png';
import container_03_img from '@/assets/svgs/container_03.png';

export const NavBarContents: NavBarContentProps[] = [
  { title: 'Products', url: '/products' },
  { title: 'Services', url: '/' },
  { title: 'Learn', url: '/' },
  { title: 'Signup', url: '/' },
];

export const FooterContents = [
  {
    ContactUs: [
      { title: 'Instagram', url: '', icon: '' },
      { title: 'Phone', url: '', icon: '' },
      { title: 'Email', url: '', icon: '' },
    ],
  },
];

export const benefits = [
  'No Minimum',
  '36 hours dispatch',
  'Responsive dashboard',
];

export const container_02_listing: ImageCardProps[] = [
  {
    id: 'container_02_list_01',
    srcImage: container_02_img_01,
    title: 'SIGNUP FOR A FREE ACCOUNT',
    url: '/',
  },
  {
    id: 'container_02_list_02',
    srcImage: container_02_img_02,
    title: 'DESIGN/MARKET CUSTOM PRODUCTS',
    url: '/',
  },
  {
    id: 'container_02_list_03',
    srcImage: container_02_img_03,
    title: 'WE FULFILL YOUR ORDERS',
    url: '/',
  },
];

export const textImageContainer_listing: TextImageCardProps[] = [
  {
    id: 'container_01',
    textContent: {
      id: 'container_01_textcard',
      title: 'Create & sell your merch online!',
      content:
        'We are committed to providing exceptional quality at an affordable price while simplifying your production process.',
      actionButton: {
        type: 'button',
        title: 'Get started',
        className:
          'bg-black hover:bg-gray-800 hover:shadow-md hover:shadow-gray-800 text-white',
        full: false,
      },
    },
    imageContent: {
      src: container_01_img,
      alt: 'Product Image',
      width: 400,
      height: 400,
    },
  },
  {
    id: 'container_03',
    textContent: {
      id: 'container_03_textcard',
      title: 'Print on demand products',
      content:
        'Are you overwhelmed with the fast fashion? We are here for you! We’ll make it easier to buy and sell pre-owned clothes. To look after every item on its journey from one wardrobe to the next. To turn secondhand into pre-loved.',
      actionButton: {
        type: 'button',
        title: 'Start designing',
        className:
          'bg-black hover:bg-gray-800 hover:shadow-md hover:shadow-gray-800 text-white',
        full: false,
      },
    },
    imageContent: {
      src: container_03_img,
      alt: 'Product Image',
      width: 300,
      height: 300,
    },
  },
];
