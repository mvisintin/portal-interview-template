import { ChangeEvent, useState } from 'react';
import { Modal, ModalProps } from '../Modal/Modal';
import * as S from './CreateItemModal.styles';

export type CreateItemModalProps = {
  handleClose: (result: string) => void;
} & ModalProps;

export function CreateItemModal({
  isVisible,
  handleClose
}: CreateItemModalProps) {
  const [itemValue, setItem] = useState<{ name: string }>({ name: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setItem({ name: e.target.value });

  return (
    <Modal isVisible={isVisible}>
      <S.Container>
        <h2>Create</h2>
        <input
          type="text"
          onChange={handleInputChange}
          value={itemValue?.name}
        />
        <button
          onClick={() => {
            handleClose(itemValue?.name);
            setItem({ name: '' });
          }}
        >
          Confirm
        </button>
      </S.Container>
    </Modal>
  );
}
