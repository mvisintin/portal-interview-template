import { CreateItemModal } from './CreateItemModal/CreateItemModal';

type AccordionTabProps = {
  openModal: () => void;
  handleOperation: (result: string) => void;
  isModalVisible: boolean;
};

export const AccordionTab = ({
  handleOperation,
  isModalVisible,
  openModal
}: AccordionTabProps) => (
  <div>
    <button onClick={openModal}>Show Modal</button>
    <CreateItemModal isVisible={isModalVisible} handleClose={handleOperation} />
  </div>
);
