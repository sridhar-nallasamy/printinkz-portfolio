import { ImageFrameProps } from '@/types/components';
import Image from 'next/image';

const ImageFrame: React.FC<ImageFrameProps> = ({
  id,
  imageContent,
  style,
  title,
}) => {
  return (
    <div
      id={`image_frame_${id}`}
      className={`my-4 border-4 border-green-300 bg-green-300 rounded-lg transform ${
        Number(id.substring(19)) % 2 === 0
          ? 'translate-x-20'
          : '-translate-x-20'
      } ${style && style} relative`}
    >
      <div
        id="title"
        className="bg-pink-500 border-2 border-black rounded-2xl text-center text-xs absolute -left-14 top-16 px-1"
      >
        {title}
      </div>
      <Image
        src={imageContent.src}
        alt={imageContent.alt}
        width={imageContent.width}
        height={imageContent.height}
        className={`border-4 border-pink-500 rounded-lg`}
      />
    </div>
  );
};

export default ImageFrame;
