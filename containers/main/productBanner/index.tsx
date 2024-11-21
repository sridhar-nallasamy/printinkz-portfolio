import TextImageContainer from '@/components/textImageContainer';
import { textImageContainerListing } from '@/constants/main/homepage';
import React from 'react';

const ProductBanner = () => {
  /* container_03*/
  return (
    <div className="md:min-h-full">
      <TextImageContainer
        {...textImageContainerListing[1]}
        style="bg-[#FFCF56] flex-col md:flex-row-reverse"
      />
    </div>
  );
};

export default ProductBanner;
