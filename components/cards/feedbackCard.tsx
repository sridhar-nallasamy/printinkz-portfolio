import { FeedbackComponentProps } from '@/types/common';
import { Avatar } from '@mui/material';
import StarRating from '../starRating';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      ml: -4,
      mt: -2,
      zIndex: 10,
      position: 'absolute',
      minHeight: '100px',
      minWidth: '100px',
      fontSize: 'xx-large',
      border: '2px black solid',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const FeedbackCard: React.FC<FeedbackComponentProps> = ({ feedback }) => {
  return (
    <div className="relative">
      <Avatar {...stringAvatar(feedback.customerName)} />
      <div
        id={`customer_feedback`}
        className="p-5 border-2 border-black rounded-full flex flex-col h-[200px]"
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
