'use client';

import { useTheme } from '@/store/hooks';
import { FcChildrenProps } from '@/types/common';
import { ThemeProvider } from '@emotion/react';

export default function CThemeProvider({ children }: FcChildrenProps) {
  const mode = useTheme();
  return <ThemeProvider theme={mode}>{children}</ThemeProvider>;
}
