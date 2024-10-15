import { FeedbackComponentProps } from '@/types/components';
import { Avatar } from '@mui/material';
import StarRating from './starRating';
import { stringAvatar } from './utils';

const FeedbackCard: React.FC<FeedbackComponentProps> = ({ feedback }) => {
  return (
    <div className="relative">
      <Avatar {...stringAvatar(feedback.customerName)} />
      <div
        id={`customer_feedback`}
        className="p-5 border-2 border-black rounded-full flex flex-col h-[12.5rem] w-[30rem]"
      >
        <div className="p-3 pb-0 text-[5cqi] sm:text-lg font-extrabold break-words text-right ml-8 flex flex-col">
          <span>{feedback.customerName.toUpperCase()}</span>
          <span>{feedback.profession?.toUpperCase()}</span>
        </div>
        <div className="p-6 pt-3 pr-0 text-sm font-medium break-words overflow-hidden hover:overflow-y-auto">
          {feedback.printInkzFeedback?.feedback}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#FF9E21] border-2 border-black p-1 rounded-3xl w-[55%] text-center h-10 absolute -mt-4">
          {feedback.printInkzFeedback?.rating && (
            <StarRating rating={feedback.printInkzFeedback.rating} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
