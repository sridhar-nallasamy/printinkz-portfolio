import { ArrowLongRight } from '@/assets/icons';
import {
  ImageCardProps,
  ImageFrameProps,
  ProductProps,
  TextImageCardProps,
} from '@/types/components';
import container01Img from '@/assets/pngs/container01.png';
import container03Img from '@/assets/pngs/container03.png';
import container02Img01 from '@/assets/pngs/container02/1.png';
import container02Img02 from '@/assets/pngs/container02/2.png';
import container02Img03 from '@/assets/pngs/container02/3.png';
import coffeeMugCustomImage from '@/assets/webps/coffeeMugs.webp';
import phoneCaseCustomImage from '@/assets/webps/phoneCase.webp';
import postersCustomImage from '@/assets/webps/posters.webp';
import tshirtCustomImage from '@/assets/webps/tshirts.webp';

const textImageContainerListing: TextImageCardProps[] = [
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
      src: container01Img,
      alt: 'Product Image',
      width: 600,
      height: 600,
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
        Icon: ArrowLongRight,
      },
    },
    imageContent: {
      src: container03Img,
      alt: 'Product Image',
      width: 400,
      height: 300,
    },
  },
];

const benefits = ['No Minimum', '36 hours dispatch', 'Responsive dashboard'];

const container02Listing: ImageCardProps[] = [
  {
    id: 'container_02_list_01',
    srcImage: container02Img01,
    title: 'SIGNUP FOR A FREE ACCOUNT',
    url: '/',
  },
  {
    id: 'container_02_list_02',
    srcImage: container02Img02,
    title: 'DESIGN/MARKET CUSTOM PRODUCTS',
    url: '/',
  },
  {
    id: 'container_02_list_03',
    srcImage: container02Img03,
    title: 'WE FULFILL YOUR ORDERS',
    url: '/',
  },
];

const container04Listing: ImageFrameProps[] = [
  {
    id: 'container_04_image_01',
    imageContent: {
      src: container03Img,
      alt: 'container_04_image_01',
      width: 200,
      height: 200,
    },
    title: 'Software Engineer',
  },
  {
    id: 'container_04_image_02',
    imageContent: {
      src: container03Img,
      alt: 'container_04_image_02',
      width: 200,
      height: 200,
    },
    title: 'Software Engineer',
  },
  {
    id: 'container_04_image_03',
    imageContent: {
      src: container03Img,
      alt: 'container_04_image_03',
      width: 200,
      height: 200,
    },
    title: 'Software Engineer',
  },
];

const customerData = [
  {
    id: 'CUSTOMER_1',
    customerName: 'Irwinn Bromwich',
    customerEmail: 'irwin@gmail.com',
    customerPhone: 9123483489,
    profession: 'Influencer',
    printInkzFeedback: {
      id: 'FEEDBACK_1',
      rating: 3,
      feedback: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    },
    productsFeedback: [],
  },
  {
    id: 'CUSTOMER_2',
    customerName: 'Lavinia MacGiffin',
    customerEmail: 'lavinaia@gmail.com',
    customerPhone: 9123483489,
    profession: 'Senior Sales Associate',
    printInkzFeedback: {
      id: 'FEEDBACK_2',
      rating: 5,
      feedback:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    },
  },
  {
    id: 'CUSTOMER_3',
    customerName: 'Kassey Haglington',
    customerEmail: 'kassy@gmail.com',
    customerPhone: 9123483489,
    profession: 'Nuclear Power Engineer',
  },
  {
    id: 'CUSTOMER_4',
    customerName: 'Noami Aronstam',
    customerEmail: 'noami@gmail.com',
    customerPhone: 9123483489,
    profession: 'Sales Associate',
    printInkzFeedback: {
      id: 'FEEDBACK_4',
      rating: 5,
      feedback:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    },
  },
  {
    id: 'CUSTOMER_5',
    customerName: 'Maggy Gencke',
    customerEmail: 'maggy@gmail.com',
    customerPhone: 9123483489,
    profession: 'Human Resource',
  },
  {
    id: 'CUSTOMER_6',
    customerName: 'Ulrick Camerello',
    customerEmail: 'urick@gmail.com',
    customerPhone: 9123483489,
    profession: 'Entrepreneur',
    printInkzFeedback: {
      id: 'FEEDBACK_6',
      rating: 3,
      feedback:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    },
  },
  {
    id: 'CUSTOMER_7',
    customerName: 'Cathrine Sprake',
    customerEmail: 'cathrine@gmail.com',
    customerPhone: 9123483489,
    profession: 'IT Professional',
    printInkzFeedback: {
      id: 'FEEDBACK_7',
      rating: 4,
      feedback:
        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    },
  },
];

const protoProducts: ProductProps[] = [
  {
    id: 'proto_tshirt',
    type: 'T-Shirts',
    title: 'Trendy Collections',
    price: 400,
    images: [{ image: tshirtCustomImage, imageTitle: 'tshirt model' }],
  },
  {
    id: 'proto_mugs',
    type: 'Mugs',
    title: 'Ceramic Collections',
    price: 200,
    images: [{ image: coffeeMugCustomImage, imageTitle: 'coffee mug model' }],
  },
  {
    id: 'proto_posters',
    type: 'Posters',
    title: 'Anime | Sports | Movie | Classic Collections ',
    price: 150,
    images: [{ image: postersCustomImage, imageTitle: 'poster model' }],
  },
  {
    id: 'proto_phoneCases',
    type: 'PhoneCases',
    title: 'Silicon | Hard Cover cases',
    price: 400,
    images: [{ image: phoneCaseCustomImage, imageTitle: 'phone case model' }],
  },
];

export {
  textImageContainerListing,
  container02Listing,
  container04Listing,
  benefits,
  customerData,
  protoProducts,
};
