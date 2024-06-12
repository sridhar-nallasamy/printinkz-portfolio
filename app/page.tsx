import { benefits, container_02_listing } from '@/constants/constants';
import ImageCard from '@/components/ImageCard';
import TextImageContainer from '@/components/TextImageContainer';
import { textImageContainer_listing } from '@/constants/constants';

export default function Home() {
  return (
    <div id="homepage">
      {/* container_01 > textcard & image & listing */}
      <TextImageContainer
        {...textImageContainer_listing[0]}
        style="p-3 bg-[#DBE668] border-4 border-black rounded-3xl mx-3 flex-col-reverse md:flex-row"
      />
      <div
        id="container_01_listing"
        className="flex md:flex-row flex-col md:justify-evenly items-center"
      >
        {benefits.map((item, index) => (
          <div key={`listing_${index}`} className="text-lg font-extrabold">
            ✅{item}
          </div>
        ))}
      </div>
      {/* container_02 textcard & lists(background & image container)*/}
      <div id="container_02">
        <div
          id="container_02_textcard"
          className="my-8 mx-3 p-3 flex flex-col items-center"
        >
          <p className="font-extrabold text-2xl text-center">
            START SELLING PRODUCTS
          </p>
          <hr className="flex-grow border-t w-[60%] border-black border-4" />
          <p className="font-extrabold text-3xl text-center">IN JUST 3 STEPS</p>
        </div>
        <div
          id="container_02_lists"
          className="relative md:h-[25rem] h-full p-4"
        >
          <div
            id="container_02_background"
            className="absolute bottom-0 left-0 w-full md:h-[75%] h-full bg-[#4668CE] -z-10 border-4 border-black"
          />
          <div
            id="container_02_image_container"
            className="flex md:flex-row flex-col gap-2 md:justify-evenly items-center"
          >
            {container_02_listing.map((item) => (
              <ImageCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* container_03 */}
      <TextImageContainer
        {...textImageContainer_listing[1]}
        style="bg-[#FFCF56] flex-col md:flex-row-reverse"
      />
    </div>
  );
}
