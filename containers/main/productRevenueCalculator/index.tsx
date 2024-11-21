'use client';
import React, { useState, useMemo, useCallback } from 'react';
import { protoProducts } from '@/constants/main/homepage';
import { ImageList, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const PrototypeCard = dynamic(() => import('./prototypeCard'), { ssr: false });
const RevenueCalculatorForm = dynamic(() => import('./revenueCalculatorForm'), {
  ssr: false,
});

const ProductRevenueCalculator = () => {
  //state & function to set the active index of the product
  const [activeIndex, setActiveIndex] = useState<number>(0);

  //active product changes only when active index changes
  const activeProduct = useMemo(
    () => protoProducts[activeIndex],
    [activeIndex],
  );

  //functions to manipulate the active index value - button navigations & click on the product - function does not need to be re-defined, hence callback
  const handleNavigation = useCallback((handlingIndex: number) => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex + handlingIndex + protoProducts.length) %
        protoProducts.length,
    );
  }, []);

  const handleActiveState = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const imageList = useMemo(
    () =>
      protoProducts.map((item, index) => (
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
      )),
    [activeIndex, handleActiveState],
  );
  return (
    <div
      id="product_revenue_calculator"
      className="w-full md:min-h-[80vh] p-2 sm:p-6 text-center bg-gray-200 flex flex-col items-center"
    >
      <Typography variant="h6" className="font-extrabold">
        How much could you make
      </Typography>
      <Typography variant="h6" className="font-semibold">
        Try different prices and sales volume
      </Typography>
      <div
        id="container_05_product_form"
        className="flex lg:flex-row flex-col gap-2 md:justify-evenly items-center bg-white px-2 py-4 mt-5 w-[80%] max-h-full"
      >
        <div className="lg:w-[50%] w-full flex flex-col items-center">
          <PrototypeCard
            product={activeProduct}
            onNavigate={handleNavigation}
          />
          <ImageList cols={protoProducts.length} rowHeight={70} className="p-2">
            {imageList}
          </ImageList>
        </div>
        <RevenueCalculatorForm productPrice={activeProduct.pricingDetails} />
      </div>
    </div>
  );
};

export default React.memo(ProductRevenueCalculator);
