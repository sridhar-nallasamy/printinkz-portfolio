import { CustomTooltipProps } from '@/types/common';
import { Tooltip, Zoom } from '@mui/material';

export default function CustomTooltip({ children, title }: CustomTooltipProps) {
  return (
    <Tooltip title={title} arrow placement="right" TransitionComponent={Zoom}>
      {children}
    </Tooltip>
  );
}
