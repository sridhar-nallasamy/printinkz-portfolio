import { TextImageCardProps } from '@/types/common';
import Image from 'next/image';
import TextCard from './TextCard';

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
        className="md:w-[50%] w-full flex items-center justify-center"
      >
        <Image
          src={imageContent.src}
          alt={imageContent.alt}
          height={imageContent.height}
          width={imageContent.width}
          className={`${id == 'container_03' ? 'rounded-lg' : ''}`}
        />
      </div>
    </div>
  );
};

export default TextImageContainer;
