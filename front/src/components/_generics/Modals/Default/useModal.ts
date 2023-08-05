import { useRef } from 'react';

export type ModalRef = {
  openModal: () => void;
  closeModal: () => void;
};

export const useModal = () => {
  const ref = useRef<ModalRef>(null);

  return {
    open: ref,
    openModal: () => ref.current?.openModal(),
    closeModal: () => ref.current?.closeModal(),
  };
};
