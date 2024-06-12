import Image from 'next/image';
import Link from 'next/link';

import { ImageCardProps } from '@/types/common';

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  title,
  srcImage,
  url,
  style,
}) => {
  return (
    <div
      id={id}
      className={`md:w-[250px] h-[350px] w-[70%] flex flex-col items-center ${style ? style : ''}`}
    >
      <div
        id={`${id}_title`}
        className={`flex h-[20%] w-[98%] p-1 rounded-2xl bg-[#FF6336] text-white text-lg text-center justify-center items-center text-pretty font-bold border-4 border-black relative z-10`}
      >
        {title}
      </div>
      <div
        id={`${id}_image`}
        className={`w-full h-[80%] flex rounded-2xl items-center bg-[#F2CE34] justify-center mt-[-15px] border-4 border-black`}
      >
        <Image src={srcImage} alt={title} width={200} height={200} />
        <Link href={url} />
      </div>
    </div>
  );
};

export default ImageCard;
