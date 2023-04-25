import { useContext } from 'react';
import { ModalContext } from './useModalProvider';

export const useModal = () => {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    console.error('useModal not in modalProvider yet');
  }

  return ctx;
}