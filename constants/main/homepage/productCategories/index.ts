import { ProductProps } from '@/types/components';
import coffeeMugCustomImage from '@/assets/webps/coffeeMugs.webp';
import phoneCaseCustomImage from '@/assets/webps/phoneCase.webp';
import postersCustomImage from '@/assets/webps/posters.webp';
import tshirtCustomImage from '@/assets/webps/tshirts.webp';

const cardColorCodes: string[] = [
  '#FF9800',
  '#9C27B0',
  '#4CAF50',
  '#F4033F',
  '#03A9F4',
];

const protoProducts: ProductProps[] = [
  {
    id: 'proto_tshirt',
    type: 'T-Shirts',
    title: 'Trendy Collections',
    pricingDetails: {
      actualPrice: 160,
      tax: 5,
      printingCost: 80,
    },
    images: [{ image: tshirtCustomImage, imageTitle: 'tshirt model' }],
  },
  {
    id: 'proto_mugs',
    type: 'Mugs',
    title: 'Ceramic Collections',
    pricingDetails: {
      actualPrice: 100,
      tax: 12,
      printingCost: 80,
    },
    images: [{ image: coffeeMugCustomImage, imageTitle: 'coffee mug model' }],
  },
  {
    id: 'proto_posters',
    type: 'Posters',
    title: 'Anime | Sports | Movie | Classic Collections ',
    pricingDetails: {
      actualPrice: 30,
      tax: 18,
      printingCost: 10,
    },
    images: [{ image: postersCustomImage, imageTitle: 'poster model' }],
  },
  {
    id: 'proto_phoneCases',
    type: 'PhoneCases',
    title: 'Silicon | Hard Cover cases',
    pricingDetails: {
      actualPrice: 130,
      tax: 18,
      printingCost: 80,
    },
    images: [{ image: phoneCaseCustomImage, imageTitle: 'phone case model' }],
  },
];

export { protoProducts, cardColorCodes };
