import { ButtonProps } from '@/types/common';

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  Icon,
  className,
  full,
  style,
}) => {
  return (
    <button
      type={type}
      style={style}
      className={`${className} ${full == true ? 'w-full' : ''} px-6 py-3 select-none font-semibold hover:font-extrabold text-xl text-center rounded-full inline-flex items-center justify-center`}
    >
      {title}
      {Icon && <Icon className="h-full" />}
    </button>
  );
};

export default Button;
