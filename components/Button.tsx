import Image from 'next/image';

import { ButtonProps } from '@/types/common';

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  icon,
  className,
  full,
  style,
}) => {
  return (
    <button
      type={type}
      style={style}
      className={`${className} ${full && 'w-full'} px-6 py-3 select-none font-semibold hover:font-extrabold text-center rounded-full`}
    >
      {icon && <Image src={icon} alt={title} />}
      {title}
    </button>
  );
};

export default Button;
