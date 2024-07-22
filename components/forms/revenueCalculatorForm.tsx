'use client';

import { initialRevenueFormState } from '@/constants/constants';
import Input from '@/components/input';
import { revenueFormStateProps } from '@/types/common';
import { ChangeEvent, useState } from 'react';
import Button from '../btn';

const labelClassName = 'sm:w-4/5 w-[50%]';
const inputClassName = 'sm:w-1/5 w-[50%]';

const RevenueCalculatorForm = () => {
  const [revenueForm, setRevenueForm] = useState<revenueFormStateProps>(
    initialRevenueFormState,
  );
  function handleOnChange(e: ChangeEvent<HTMLInputElement>, inputType: string) {
    if (e.target.value != null) {
      setRevenueForm((prevValue: revenueFormStateProps) => ({
        ...prevValue,
        [e.target.name]:
          inputType === 'number' ? +e.target.value : e.target.value,
      }));
    }
  }
  return (
    <form
      className="lg:w-[50%] w-full max-w-2xl lg:mt-0 mt-4"
      id="revenueCalculatorForm"
    >
      <p className="font-bold text-center text-xl">Calculator</p>
      <Input
        label="taxes"
        labelClassName={labelClassName}
        stateName="taxes"
        inputType="number"
        inputClassName={inputClassName}
        value={revenueForm.taxes}
        forForm="revenueCalculatorForm"
        info="taxes are..."
        onChange={handleOnChange}
      />
      <Input
        label="Platform monthly fee"
        labelClassName={labelClassName}
        stateName="monthlyPlatformFee"
        inputType="number"
        inputClassName={inputClassName}
        value={revenueForm.monthlyPlatformFee}
        forForm="revenueCalculatorForm"
        info="platform fee..."
        onChange={handleOnChange}
      />
      <Input
        label="Production transaction Fee"
        labelClassName={labelClassName}
        stateName="productTransactionFee"
        inputType="number"
        inputClassName={inputClassName}
        value={revenueForm.productTransactionFee}
        forForm="revenueCalculatorForm"
        info="info..."
        onChange={handleOnChange}
      />
      <Input
        label="Other monthly fees"
        labelClassName={labelClassName}
        stateName="monthlyOtherFee"
        inputType="number"
        inputClassName={inputClassName}
        value={revenueForm.monthlyOtherFee}
        forForm="revenueCalculatorForm"
        info="info..."
        onChange={handleOnChange}
      />
      <Input
        label="Quantity Sold"
        stateName="quantitySold"
        inputType="range"
        min={100}
        max={10000}
        value={revenueForm.quantitySold}
        forForm="revenueCalculatorForm"
        onChange={handleOnChange}
      />
      <Input
        label="Your Retail Price"
        stateName="retailPrice"
        inputType="range"
        min={0}
        max={10000}
        value={revenueForm.retailPrice}
        forForm="revenueCalculatorForm"
        onChange={handleOnChange}
      />
      <Button
        type="button"
        title="Get Started"
        className="shadow bg-red-700 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      />
    </form>
  );
};

export default RevenueCalculatorForm;
