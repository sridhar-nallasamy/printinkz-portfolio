'use client';

import { ChevronLeft, ChevronRight } from '@/assets/icons';
import { PrototypeComponentProps } from '@/types/components';
import Image from 'next/image';
import { memo } from 'react';

const PrototypeCard: React.FC<PrototypeComponentProps> = ({
  product,
  onNavigate,
}) => {
  return (
    <>
      <p
        id="product_name"
        className="font-bold text-xl"
        aria-label="Product Name"
      >
        {product.type}
      </p>
      <p className="text-sm font-semibold" aria-label="Product title">
        {product.title}
      </p>
      <p
        className="text-xs font-semibold"
        aria-label="Pricing of the product starts from"
      >
        starting from {product.pricingDetails.actualPrice}
      </p>
      <div
        id="prototypecard-content"
        className="flex align-middle"
        aria-label="Products & Navigation buttons"
      >
        <ChevronLeft
          className="w-10 hover:text-[#00774D] hover:cursor-pointer"
          onClick={() => onNavigate(-1)}
          aria-label="Previous"
        />
        <div
          id="active_product"
          aria-label="Active Product"
          className="flex-col text-center relative p-3 bg-gray-200 rounded-md shadow-lg"
        >
          <Image
            src={product.images[0].image}
            alt={product.title}
            width={325}
            height={325}
            className="rounded-md mt-3"
          />
        </div>
        <ChevronRight
          className="w-10 hover:text-[#00774D] hover:cursor-pointer"
          onClick={() => onNavigate(1)}
          aria-label="Next"
        />
      </div>
    </>
  );
};

export default memo(PrototypeCard);
