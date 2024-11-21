import Introduction from '@/containers/main/introduction';
import SalesBanner from '@/containers/main/salesBanner';
import ProductBanner from '@/containers/main/productBanner';
import ProductCategories from '@/containers/main/productCategories';
import ProductRevenueCalculator from '@/containers/main/productRevenueCalculator';
import SellersReview from '@/containers/main/sellersReview';
import FashionBrandBanner from '@/containers/main/fashionBrandBanner';

export default function Home() {
  return (
    <div id="homepage">
      <Introduction />
      <SalesBanner />
      <ProductBanner />
      <ProductCategories />
      {/* Dashboard */}
      <FashionBrandBanner />
      <ProductRevenueCalculator />
      <SellersReview />
    </div>
  );
}
