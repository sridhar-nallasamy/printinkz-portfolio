import { protoProducts } from '@/constants/main/homepage/productCategories';
import { Typography } from '@mui/material';
import React from 'react';
import SwiperSlideWrapper from '@/components/wrappers/swiperSlidesWrapper/swiperSlideWrapper';
import ProductCategoryCard from './productCategoryCard';

const ProductCategories = () => {
  return (
    <div
      id="product_categories"
      className="md:min-h-full md:h-[90vh] flex flex-col items-center justify-evenly"
    >
      <Typography
        variant="h4"
        className="w-full p-3 bg-[#E96951] font-extrabold text-center text-white"
      >
        PRODUCT CATEGORIES
      </Typography>
      <SwiperSlideWrapper
        sliderContent={protoProducts}
        sliderComponent={ProductCategoryCard}
      />
    </div>
  );
};

export default ProductCategories;
