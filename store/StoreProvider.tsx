'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { FcChildrenProps } from '@/types/common';
import { createStore } from './store';

export default function StoreProvider({ children }: FcChildrenProps) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.getState();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
