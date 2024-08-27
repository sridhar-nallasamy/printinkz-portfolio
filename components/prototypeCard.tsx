'use client';

import { ChevronLeft, ChevronRight } from '@/assets/icons';
import { PrototypeComponentProps } from '@/types/components';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const PrototypeCard: React.FC<PrototypeComponentProps> = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNavigation(handlingIndex: number) {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex + handlingIndex + product.length) % product.length,
    );
  }

  function handleActiveState(index: number) {
    setActiveIndex(index);
  }
  return (
    <div className="lg:w-[50%] w-full flex flex-col items-center">
      <p id="product_name" className="text-xl font-bold">
        {product[activeIndex].type}
      </p>
      <p className="text-sm font-semibold">{product[activeIndex].title}</p>
      <p className="text-xs font-semibold">
        starting from {product[activeIndex].price}
      </p>
      <div className="flex align-middle">
        <ChevronLeft
          className="w-10 hover:text-[#00774D] hover:cursor-pointer"
          onClick={() => handleNavigation(-1)}
        />
        <div id="active_product" className="flex-col text-center">
          <Image
            src={product[activeIndex].images[0].image}
            alt={product[activeIndex].title}
            width={325}
            className="rounded-md mt-3"
          />
        </div>
        <ChevronRight
          className="w-10 hover:text-[#00774D] hover:cursor-pointer"
          onClick={() => handleNavigation(1)}
        />
      </div>
      <ImageList cols={product.length} rowHeight={70} className="p-2">
        {product.map((item, index) => (
          <ImageListItem key={`product_${item.id}`}>
            <Image
              src={item.images[0].image}
              alt={item.title}
              loading="lazy"
              width={70}
              height={70}
              onClick={() => handleActiveState(index)}
              className={`rounded-md ${index === activeIndex ? 'pb-1 border-4 border-b-[#00774D]' : 'hover:scale-105 hover:cursor-pointer'} `}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default PrototypeCard;
