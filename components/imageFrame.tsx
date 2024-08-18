import { ImageFrameProps } from '@/types/components';
import Image from 'next/image';

const ImageFrame: React.FC<ImageFrameProps> = ({
  id,
  imageContent,
  style,
  //title,
}) => {
  return (
    <div
      id={`image_frame_${id}`}
      className={`border-4 border-green-300 bg-green-300 rounded-lg transform ${
        Number(id.substring(19)) % 2 === 0
          ? 'translate-x-20'
          : '-translate-x-20'
      } ${style && style} `}
    >
      <Image
        src={imageContent.src}
        alt={imageContent.alt}
        width={100}
        height={100}
        className={`border-4 border-pink-500 rounded-lg`}
      />
    </div>
  );
};

export default ImageFrame;
