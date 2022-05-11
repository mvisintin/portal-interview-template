import { PropsWithChildren } from 'react';
import * as S from './Modal.styles';

export type ModalProps = {
  isVisible: boolean;
};

export const Modal = ({ isVisible, children }: PropsWithChildren<ModalProps>) =>
  isVisible ? <S.Container>{children}</S.Container> : null;
