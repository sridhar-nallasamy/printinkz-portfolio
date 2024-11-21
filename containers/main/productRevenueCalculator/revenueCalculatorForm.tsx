'use client';

import { initialRevenueFormState } from '@/constants/main/homepage/forms';
import { Slider, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { RevenueCalculatorFormProps } from '@/types/components';
import CustomInput from '@/components/customInput';
import CustomButton from '../../../components/customButton';

const validationSchema = yup.object({
  quantitySold: yup
    .number()
    .required('Quantity sold is required')
    .min(0, 'Must be 0 or more'),
  retailPrice: yup
    .number()
    .required('Retail price is required')
    .min(0, 'Must be 0 or more'),
});

const RevenueCalculatorForm: React.FC<RevenueCalculatorFormProps> = ({
  productPrice,
}) => {
  const formik = useFormik({
    initialValues: initialRevenueFormState,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      className="lg:w-[50%] w-full max-w-2xl lg:mt-0 px-3"
      id="revenueCalculatorForm"
      onSubmit={formik.handleSubmit}
    >
      <p className="font-bold text-center text-xl my-4">Calculator</p>
      {/* Quantity Sold Slider */}
      <>
        <CustomInput
          type="textField"
          id="quantitySold"
          name="quantitySold"
          label="Quatity Sold"
          value={formik.values.quantitySold}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={
            formik.touched.quantitySold && Boolean(formik.errors.quantitySold)
          }
          helperText={formik.touched.quantitySold && formik.errors.quantitySold}
          info="Quantity that you are planning to sell "
        />
        <Slider
          value={formik.values.quantitySold}
          onChange={(e, value) => formik.setFieldValue('quantitySold', value)}
          aria-labelledby="quantity-sold-slider"
          min={1}
          max={5000}
          step={1}
          valueLabelDisplay="on"
          color="success"
        />
      </>
      {/* Retail Price Slider */}
      <>
        <CustomInput
          type="textField"
          id="retailPrice"
          name="retailPrice"
          label="Your retail price"
          value={formik.values.retailPrice}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={
            formik.touched.retailPrice && Boolean(formik.errors.retailPrice)
          }
          helperText={formik.touched.retailPrice && formik.errors.retailPrice}
          info="Your Selling Price "
        />
        <Slider
          value={formik.values.retailPrice}
          onChange={(e, value) => formik.setFieldValue('retailPrice', value)}
          aria-labelledby="retail-price-slider"
          min={1}
          max={2000}
          step={1}
          valueLabelDisplay="on"
          color="success"
        />
      </>
      {/* Approximate Monthly Profit (Calculated value) */}
      <Typography className="font-extrabold text-2xl my-4" gutterBottom>
        Your approximate profit: Rs.
        {Math.floor(
          formik.values.retailPrice * formik.values.quantitySold -
            (productPrice.actualPrice +
              productPrice.printingCost +
              (productPrice.actualPrice + productPrice.printingCost) *
                (productPrice.tax / 100)) *
              formik.values.quantitySold,
        )}
      </Typography>
      <CustomButton
        type="submit"
        title="Start Selling"
        className="bg-red-600 hover:bg-red-400 hover:shadow-md hover:shadow-red-700 text-white font-bold my-4"
      />
    </form>
  );
};

export default RevenueCalculatorForm;
