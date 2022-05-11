import { useState } from 'react';
import { CreateItemModal } from './CreateItemModal/CreateItemModal';

export const ApplicationsPage = () => {
  const [operationResult, setOperationResult] = useState<{
    result: string;
  }>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOperation = (result: string) => {
    const isEven = result.length % 2 === 0;
    setOperationResult({ result: isEven ? '👍' : '👎' });
    setIsModalVisible(false);
  };

  return (
    <div>
      <h1>Applications Page</h1>
      <button onClick={() => setIsModalVisible(true)}>Show Modal</button>
      <div>{operationResult?.result}</div>
      <CreateItemModal
        isVisible={isModalVisible}
        handleClose={handleOperation}
      />
    </div>
  );
};
