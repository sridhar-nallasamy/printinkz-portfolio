'use client';
import { ProductCategoryCardProps } from '@/types/components';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react';
import CustomButton from '@/components/customButton';
import { cardColorCodes } from '@/constants/main/homepage/productCategories';

const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  data,
  index,
}) => {
  return (
    <Card
      key={`product_key_${index}`}
      sx={{
        minWidth: 200,
        minHeight: 500,
        bgcolor: cardColorCodes[index % cardColorCodes.length],
        opacity: 1,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
      }}
    >
      <CardActions className="flex justify-end">
        <IconButton>
          <ShareIcon className="mr-2" />
        </IconButton>
      </CardActions>
      <div className="flex items-center justify-center">
        <CardMedia
          sx={{
            height: 300,
            width: 300,
          }}
          image={data.images[0].image.src}
          title={data.images[0].imageTitle}
        />
      </div>
      <CardContent className="flex flex-row justify-between">
        <Typography gutterBottom variant="h5" component="div">
          {data.type}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Rs. {data.pricingDetails.actualPrice}
        </Typography>
      </CardContent>
      <CardActions className="-mt-5">
        <CustomButton
          type="button"
          title="Start Designing"
          className="bg-black hover:bg-slate-900 hover:shadow-md hover:shadow-gray-800 text-white"
          full={true}
        />
      </CardActions>
    </Card>
  );
};

export default ProductCategoryCard;
