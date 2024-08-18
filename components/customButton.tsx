import { CustomButtonProps } from '@/types/components';
import { Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

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
      className={`${className} ${full && 'w-full'} px-6 py-3 select-none text-center inline-flex items-center justify-center`}
      {...(Icon
        ? {
            endIcon: (
              <SvgIcon>
                <Icon />
              </SvgIcon>
            ),
          }
        : {})}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
