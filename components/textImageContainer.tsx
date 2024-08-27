import { TextImageCardProps } from '@/types/components';
import Image from 'next/image';
import TextCard from './textCard';

const TextImageContainer = ({
  id,
  textContent,
  imageContent,
  style,
}: TextImageCardProps) => {
  return (
    <div id={id} className={`flex flex-auto ${style ? style : ''} my-5`}>
      <TextCard
        id={textContent.id}
        style="md:w-[50%] w-full"
        title={textContent.title}
        content={textContent.content}
        actionButton={textContent.actionButton}
      />
      <div
        id={`${id}_image}`}
        className="md:w-[50%] w-full flex items-center justify-center relative"
      >
        <Image
          src={imageContent.src}
          alt={imageContent.alt}
          className={`relative ${id == 'container_03' ? 'rounded-lg' : ''}`} //h-[50%] w-[50%] md:h-full md:w-full
          layout="fill"
          objectFit="cover"
          //height={imageContent.height}
          //width={imageContent.width}
        />
      </div>
    </div>
  );
};

export default TextImageContainer;
