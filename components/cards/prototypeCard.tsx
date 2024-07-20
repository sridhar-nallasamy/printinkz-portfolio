'use client';
import { ChevronLeft, ChevronRight } from '@/assets/svgs/Icons';
import { PrototypeComponentProps } from '@/types/common';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const PrototypeCard: React.FC<PrototypeComponentProps> = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNavigation(handlingIndex: number) {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex + handlingIndex + products.length) % products.length,
    );
  }

  function handleActiveState(index: number) {
    setActiveIndex(index);
  }
  return (
    <div className="lg:w-[50%] w-full flex flex-col items-center">
      <p id="product_name" className="text-2xl font-bold">
        {products[activeIndex].type}
      </p>
      <p className="text-lg font-semibold">{products[activeIndex].title}</p>
      <p className="text-sm font-semibold">
        starting from {products[activeIndex].price}
      </p>
      <div className="flex align-middle">
        <ChevronLeft
          className="w-10 hover:text-[#00774D] hover:cursor-pointer"
          onClick={() => handleNavigation(-1)}
        />
        <div id="active_product" className="flex-col text-center">
          <Image
            src={products[activeIndex].images[0]}
            alt={products[activeIndex].title}
            width={450}
            className="rounded-md mt-3"
          />
        </div>
        <ChevronRight
          className="w-10 hover:text-[#00774D] hover:cursor-pointer"
          onClick={() => handleNavigation(1)}
        />
      </div>
      <ImageList cols={products.length} rowHeight={100} className="p-2">
        {products.map((item, index) => (
          <ImageListItem key={`product_${item.id}`}>
            <Image
              src={item.images[0]}
              alt={item.title}
              loading="lazy"
              width={100}
              height={100}
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
