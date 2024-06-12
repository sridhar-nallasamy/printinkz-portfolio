'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { createStore } from './store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.getState();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
