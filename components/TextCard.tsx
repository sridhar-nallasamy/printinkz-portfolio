import { TextCardProps } from '@/types/common';
import Button from './button';

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
        <div id={`${id}_subtitle`} className="text-2xl">
          {subTitle}
        </div>
      )}
      <div id={`${id}_title`} className="text-6xl font-extrabold">
        {title}
      </div>
      <div id={`${id}_content`} className="text-2xl">
        {content}
      </div>
      {actionButton && (
        <Button
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
              ✅{item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextCard;
