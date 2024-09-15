'use client';

import { initialRevenueFormState } from '@/constants/main/homepage/forms';
import { Slider, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomButton from '../customButton';
import CustomInput from '../customInput';

const validationSchema = yup.object({
  taxes: yup
    .number()
    .required('Taxes are required')
    .min(0, 'Must be 0 or more'),
  monthlyPlatformFee: yup
    .number()
    .required('Platform fee is required')
    .min(0, 'Must be 0 or more'),
  productTransactionFee: yup
    .number()
    .required('Transaction fee is required')
    .min(0, 'Must be 0 or more'),
  monthlyOtherFee: yup
    .number()
    .required('Other monthly fees are required')
    .min(0, 'Must be 0 or more'),
  quantitySold: yup
    .number()
    .required('Quantity sold is required')
    .min(0, 'Must be 0 or more'),
  retailPrice: yup
    .number()
    .required('Retail price is required')
    .min(0, 'Must be 0 or more'),
});

const RevenueCalculatorForm = () => {
  const formik = useFormik({
    initialValues: initialRevenueFormState,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      className="lg:w-[50%] w-full max-w-2xl lg:mt-0 mt-4 px-3"
      id="revenueCalculatorForm"
      onSubmit={formik.handleSubmit}
    >
      <p className="font-bold text-center text-xl">Calculator</p>
      <CustomInput
        type="textField"
        id="taxes"
        name="taxes"
        label="Taxes"
        value={formik.values.taxes}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        error={formik.touched.taxes && Boolean(formik.errors.taxes)}
        helperText={formik.touched.taxes && formik.errors.taxes}
        inputProp="%"
        info="Taxes include ..... "
      />

      {/* Platform Fee Input */}
      <CustomInput
        type="textField"
        id="monthlyPlatformFee"
        name="monthlyPlatformFee"
        label="Platform monthly fee"
        value={formik.values.monthlyPlatformFee}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        error={
          formik.touched.monthlyPlatformFee &&
          Boolean(formik.errors.monthlyPlatformFee)
        }
        helperText={
          formik.touched.monthlyPlatformFee && formik.errors.monthlyPlatformFee
        }
        inputProp="Rs"
        info="Platform Fees includes ..... per month"
      />

      {/* Transaction Fee Input */}
      <CustomInput
        type="textField"
        id="productTransactionFee"
        name="productTransactionFee"
        label="Product transaction fee"
        value={formik.values.productTransactionFee}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        error={
          formik.touched.productTransactionFee &&
          Boolean(formik.errors.productTransactionFee)
        }
        helperText={
          formik.touched.productTransactionFee &&
          formik.errors.productTransactionFee
        }
        inputProp="Rs"
        info="Product transaction Fees includes ..... per month"
      />

      {/* Other Fees Input */}
      <CustomInput
        type="textField"
        id="monthlyOtherFee"
        name="monthlyOtherFee"
        label="Other monthly fees"
        value={formik.values.monthlyOtherFee}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        error={
          formik.touched.monthlyOtherFee &&
          Boolean(formik.errors.monthlyOtherFee)
        }
        helperText={
          formik.touched.monthlyOtherFee && formik.errors.monthlyOtherFee
        }
        inputProp="Rs"
        info="Other Monthly Fees includes ..... per month"
      />

      {/* Quantity Sold Slider */}
      <Typography gutterBottom>Quatity Sold</Typography>
      <Slider
        value={formik.values.quantitySold}
        onChange={(e, value) => formik.setFieldValue('quantitySold', value)}
        aria-labelledby="quantity-sold-slider"
        min={1}
        max={2000}
        step={1}
        valueLabelDisplay="on"
        color="success"
      />

      {/* <CustomInput
        type="slider"
        id="quantitySold"
        name="quantitySold"
        label="Quantity Sold"
        value={formik.values.quantitySold}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        error={
          formik.touched.quantitySold && Boolean(formik.errors.quantitySold)
        }
        helperText={formik.touched.quantitySold && formik.errors.quantitySold}
        inputProps={{
          step: 10,
          min: 0,
          max: 100,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
      /> */}

      {/* Retail Price Slider */}
      <Typography gutterBottom>Your retail price</Typography>
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

      {/* Approximate Monthly Profit (Calculated value) */}
      <Typography variant="h6" color="textPrimary" gutterBottom>
        Your approximate monthly profit: Rs.
        {formik.values.retailPrice * formik.values.quantitySold -
          formik.values.productTransactionFee -
          formik.values.monthlyPlatformFee -
          formik.values.monthlyOtherFee -
          (formik.values.taxes / 100) *
            (formik.values.retailPrice * formik.values.quantitySold)}
      </Typography>
      <CustomButton
        type="submit"
        title="Start Selling"
        className="bg-red-600 hover:bg-red-400 hover:shadow-md hover:shadow-red-700 text-white font-bold"
      />
    </form>
  );
};

export default RevenueCalculatorForm;
