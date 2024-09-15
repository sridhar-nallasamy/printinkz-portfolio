import { revenueFormStateProps } from '@/types/forms';

const initialRevenueFormState: revenueFormStateProps = {
  taxes: 0,
  monthlyPlatformFee: 0,
  productTransactionFee: 0,
  monthlyOtherFee: 0,
  quantitySold: 50,
  retailPrice: 500,
};

export { initialRevenueFormState };
