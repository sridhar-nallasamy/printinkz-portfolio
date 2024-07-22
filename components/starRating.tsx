import { FilledStar, HalfFilledStar } from '@/assets/svgs/Icons';
import { StarRatingComponentProps } from '@/types/common';

const StarRating: React.FC<StarRatingComponentProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FilledStar key={`full-${i + 1}`} width={25} strokeWidth={1.5} />,
    );
  }

  if (hasHalfStar) {
    stars.push(<HalfFilledStar key="half" strokeWidth={1.5} />);
  }

  return <div className="flex justify-center">{stars}</div>;
};

export default StarRating;
