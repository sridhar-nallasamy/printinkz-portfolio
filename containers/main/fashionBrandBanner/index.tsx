import ImageFrame from '@/components/imageFrame';
import TextCard from '@/components/textCard';
import { benefits, container04Listing } from '@/constants/main/homepage';
import React from 'react';

const FashionBrandBanner = () => {
  // container_04
  return (
    <div
      id="container_04"
      className="w-full flex flex-col md:flex-row bg-[#00774D] text-white"
    >
      <TextCard
        id="container_04_textcard"
        style="md:w-[50%] w-full"
        title="Build your fashion brand with Printinkz!"
        content="Customize high-quality apparel with ease, offering unique designs that set your brand apart We ensure high-quality products and reliable dropshipping. Start your journey today and let your creativity shine through our seamless, on-demand printing services. Transform your unique designs into reality and grow your business with ease."
        subTitle="Now it's easy!"
        listing={benefits}
      />
      <div
        id="container_04_images"
        className="md:w-[50%] w-full relative flex flex-col justify-evenly items-center"
      >
        {container04Listing.map((item, index) => (
          <ImageFrame key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FashionBrandBanner;
