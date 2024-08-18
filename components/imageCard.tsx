import { ImageCardProps } from '@/types/components';
import Image from 'next/image';
import Link from 'next/link';

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
      className={`md:w-[18.75rem] h-[25rem] w-[70%] flex flex-col items-center ${style && style}`}
    >
      <div
        id={`${id}_title`}
        className={`flex h-[20%] w-[98%] p-1 rounded-2xl bg-[#FF6336] text-white text-lg text-center justify-center items-center text-pretty font-bold border-4 border-black relative z-10`}
      >
        {title}
      </div>
      <div
        id={`${id}_image`}
        className={`w-full h-[80%] flex rounded-2xl items-center bg-[#F2CE34] justify-center mt-[-0.938rem] border-4 border-black`}
      >
        <Image src={srcImage} alt={title} width={300} height={300} />
        <Link href={url} />
      </div>
    </div>
  );
};

export default ImageCard;
