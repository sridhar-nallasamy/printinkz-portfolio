import { TextCardProps } from '@/types/components';
import { Typography } from '@mui/material';
import CustomButton from './customButton';
//Title, Subtitle, Content, ActionItems, Listings

const TextCard: React.FC<TextCardProps> = ({
  id,
  title,
  subTitle,
  content,
  actionButton,
  listing,
  style,
}) => {
  return (
    <div
      id={`${id}_textcard`}
      className={`${style && style} p-5 rounded-lg flex flex-col flex-auto flex-wrap gap-2 justify-around`}
    >
      {subTitle && (
        <Typography id={`${id}_subtitle`} variant="body1" className="text-xl">
          {subTitle}
        </Typography>
      )}
      <Typography variant="h2" id={`${id}_title`} className="font-extrabold">
        {title}
      </Typography>
      <Typography variant="body1" id={`${id}_content`} className="text-2xl">
        {content}
      </Typography>
      {actionButton && (
        <CustomButton
          type="button"
          title={actionButton.title}
          className={actionButton.className}
          full={actionButton.full}
          Icon={actionButton.Icon}
        />
      )}
      {listing && (
        <ul>
          {listing.map((item, index) => (
            <li key={`listing_${index}`} className="p-2">
              <Typography variant="body1" className="text-2xl">
                ✅{item}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextCard;
