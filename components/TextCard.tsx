import { TextCardProps } from '@/types/common';
import React from 'react';
import Button from './Button';

//Title, Subtitle, Content, ActionItems, Listings

const TextCard = ({
  id,
  title,
  subTitle,
  content,
  actionButton,
  listing,
  style,
}: TextCardProps) => {
  return (
    <div
      id={`${id}_textcard`}
      className={`${style && style} p-5 rounded-lg flex flex-col flex-auto flex-wrap gap-2 justify-around`}
    >
      <div id={`${id}_title`} className="text-5xl font-extrabold">
        {title}
      </div>
      {subTitle && (
        <div id={`${id}_subtitle`} className="text-2xl">
          {subTitle}
        </div>
      )}
      <div id={`${id}_content`} className="text-xl">
        {content}
      </div>
      {actionButton && (
        <Button
          type="button"
          title={actionButton.title}
          className={actionButton.className}
          full={actionButton.full}
        />
      )}
      {listing && (
        <ul>
          {listing.map((item, index) => (
            <li key={`listing_${index}`}>✅{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextCard;
