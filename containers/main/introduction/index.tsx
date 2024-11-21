import TextImageContainer from '@/components/textImageContainer';
import { benefits, textImageContainerListing } from '@/constants/main/homepage';
import { Typography } from '@mui/material';

const Introduction = () => {
  /* container_01 > textcard & image & listing //[80vh]md:h-[55vh]*/
  return (
    <div id="container_01" className="md:min-h-full">
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
  );
};

export default Introduction;
