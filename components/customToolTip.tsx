import { CustomTooltipProps } from '@/types/components';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import React from 'react';

const CustomToolTip: React.FC<CustomTooltipProps> = ({ children, title }) => {
  const StyledToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  return (
    <StyledToolTip title={title} followCursor>
      {children}
    </StyledToolTip>
  );
};

export default CustomToolTip;
