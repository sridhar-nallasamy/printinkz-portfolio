'use client';

import { FcChildrenProps } from '@/types/common';

const Main = ({ children }: FcChildrenProps) => {
  return (
    <main className={'w-full lg:h-[calc(100%-20vh)] h-full'}>{children}</main>
  );
};

export default Main;
