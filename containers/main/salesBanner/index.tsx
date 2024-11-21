import ImageCard from '@/components/imageCard';
import { container02Listing } from '@/constants/main/homepage';
import { Typography } from '@mui/material';
import React from 'react';

const SalesBanner = () => {
  /* container_02 textcard & lists(background & image container) //[80vh]md:h-[55vh]*/
  return (
    <div
      id="container_02"
      className="md:min-h-full flex flex-col justify-between"
    >
      <div
        id="container_02_textcard"
        className="my-6 mx-3 p-3 flex flex-col items-center"
      >
        <Typography variant="h3" className="font-extrabold text-center">
          START SELLING PRODUCTS
        </Typography>
        <hr className="flex-grow border-t w-[60%] border-black border-4" />
        <Typography variant="h2" className="font-extrabold text-center">
          IN JUST 3 STEPS
        </Typography>
      </div>
      <div id="container_02_lists" className="relative h-full p-4">
        <div
          id="container_02_background"
          className="absolute bottom-0 left-0 w-full md:h-[75%] h-full bg-[#4668CE] -z-10 border-4 border-black"
        />
        <div
          id="container_02_image_container"
          className="flex md:flex-row flex-col gap-2 md:justify-evenly items-center"
        >
          {container02Listing.map((item) => (
            <ImageCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesBanner;
