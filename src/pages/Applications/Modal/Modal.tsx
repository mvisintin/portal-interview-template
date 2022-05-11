import { PropsWithChildren } from 'react';

export type ModalProps = {
  isVisible: boolean;
};

export const Modal = ({ isVisible, children }: PropsWithChildren<ModalProps>) =>
  isVisible ? (
    <dialog open>
      <article>{children}</article>
    </dialog>
  ) : null;
