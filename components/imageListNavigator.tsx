import { ChevronLeft, ChevronRight } from '@/assets/icons';
import { ImageListNavigatorProps } from '@/types/components';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageListNavigator: React.FC<ImageListNavigatorProps> = ({
  imageList,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNavigation(handlingIndex: number) {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex + handlingIndex + imageList.length) % imageList.length,
    );
  }

  function handleActiveState(index: number) {
    setActiveIndex(index);
  }
  return (
    <>
      <div>
        <ChevronLeft
          className="w-10 hover:text-[#00774D] hover:cursor-pointer"
          onClick={() => handleNavigation(-1)}
        />
        <div id="active_product" className="flex-col text-center">
          <Image
            src={imageList[activeIndex].image}
            alt={imageList[activeIndex].imageTitle}
            width={450}
            className="rounded-md mt-3"
          />
        </div>
        <ChevronRight
          className="w-10 hover:text-[#00774D] hover:cursor-pointer"
          onClick={() => handleNavigation(1)}
        />
      </div>
      <ImageList cols={imageList.length} rowHeight={100} className="p-2">
        {imageList.map((item, index) => (
          <ImageListItem key={`imagelist_${item.imageTitle}`}>
            <Image
              src={item.image}
              alt={item.imageTitle}
              loading="lazy"
              width={100}
              height={100}
              onClick={() => handleActiveState(index)}
              className={`rounded-md ${index === activeIndex ? 'pb-1 border-4 border-b-[#00774D]' : 'hover:scale-105 hover:cursor-pointer'} `}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ImageListNavigator;
