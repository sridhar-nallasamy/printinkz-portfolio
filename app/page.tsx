import FeedbackCard from '@/components/feedbackCard';
import ImageCard from '@/components/imageCard';
import ImageFrame from '@/components/imageFrame';
import TextCard from '@/components/textCard';
import TextImageContainer from '@/components/textImageContainer';
import {
  benefits,
  container02Listing,
  container04Listing,
  customerData,
  textImageContainerListing,
} from '@/constants/main/homepage';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <div id="homepage">
      {/* container_01 > textcard & image & listing */}
      <div className="md:min-h-[80vh]">
        <TextImageContainer
          {...textImageContainerListing[0]}
          style="p-3 bg-[#DBE668] border-4 border-black rounded-3xl mx-3 flex-col-reverse md:flex-row md:h-[78vh]"
        />
        <div
          id="container_01_listing"
          className="flex md:flex-row flex-col md:justify-evenly items-center"
        >
          {benefits.map((item, index) => (
            <Typography
              variant="h6"
              key={`listing_${index}`}
              className="font-extrabold"
            >
              ✅{item}
            </Typography>
          ))}
        </div>
      </div>

      {/* container_02 textcard & lists(background & image container)*/}
      <div
        id="container_02"
        className="md:min-h-[89vh] flex flex-col justify-between"
      >
        <div
          id="container_02_textcard"
          className="my-8 mx-3 p-3 flex flex-col items-center"
        >
          <p className="font-extrabold text-5xl text-center">
            START SELLING PRODUCTS
          </p>
          <hr className="flex-grow border-t w-[60%] border-black border-4" />
          <p className="font-extrabold text-8xl text-center">IN JUST 3 STEPS</p>
        </div>
        <div
          id="container_02_lists"
          className="relative md:h-[55vh] h-full p-4" //md:h-[25rem]
        >
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

      {/* container_03 */}
      <TextImageContainer
        {...textImageContainerListing[1]}
        style="bg-[#FFCF56] flex-col md:flex-row-reverse"
      />

      {/* Product Categories */}
      <div id="product_categories">
        <Typography
          variant="h4"
          className="w-full p-3 bg-[#E96951] font-extrabold text-center text-white"
        >
          PRODUCT CATEGORIES
        </Typography>
        <Typography variant="body1">List of products</Typography>
      </div>

      {/* Dashboard */}

      {/* container_04 */}
      <div
        id="container_04"
        className="w-full flex flex-col md:flex-row bg-[#00774D] text-white"
      >
        <TextCard
          id="container_04_textcard"
          style="md:w-[60%] w-full"
          title="Build your fashion brand with Printinkz!"
          content="Customize high-quality apparel with ease, offering unique designs that set your brand apart We ensure high-quality products and reliable dropshipping. Start your journey today and let your creativity shine through our seamless, on-demand printing services. Transform your unique designs into reality and grow your business with ease."
          subTitle="Now it's easy!"
          listing={benefits}
        />
        <div
          id="container_04_images"
          className="md:w-[40%] w-full relative flex flex-col justify-evenly items-center"
        >
          {container04Listing.map((item, index) => (
            <ImageFrame key={index} {...item} />
          ))}
        </div>
      </div>
      {/* Sellers Review */}
      <div id="sellers-review" className="w-full flex justify-center mt-10 ">
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
      <div
        id="sellers-review-content"
        className="mt-10 p-10 grid grid-flow-row gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {customerData
          .filter((customer) => 'printInkzFeedback' in customer)
          .map((data, index) => (
            <FeedbackCard key={`customer_feedback_${index}`} feedback={data} />
          ))}
      </div>
    </div>
  );
}
