import { Typography } from '@mui/material';
import React from 'react';
import CustomerReview from './customerReview';

const SellersReview = () => {
  return (
    <>
      <div id="sellers-review" className="w-full flex justify-center mt-5 ">
        <div id="sellers-review-title" className="relative inline-block">
          <Typography
            variant="h1"
            className="text-center text-7xl font-extrabold"
          >
            SELLERS
          </Typography>
          <span className="absolute border-2 border-black top-[72%] left-[52%] transform -rotate-6  text-center px-4 py-1 bg-orange-500 text-white text-xl font-semibold rounded-full shadow-lg">
            FEEDBACK
          </span>
        </div>
      </div>
      <CustomerReview />
    </>
  );
};

export default SellersReview;
