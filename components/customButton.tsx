import { CustomButtonProps } from '@/types/components';
import { Button } from '@mui/material';

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  title,
  Icon,
  className,
  full,
  style,
}) => {
  return (
    <Button
      type={type}
      style={style}
      className={`${className} ${full == true ? 'w-full' : ''} px-6 py-3 select-none text-center inline-flex items-center justify-center`}
    >
      {title}
      {Icon && <Icon className="h-full" />}
    </Button>
  );
};

export default CustomButton;
