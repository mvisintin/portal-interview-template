import { useState } from 'react';
import { CreateItemModal } from '../Applications/CreateItemModal/CreateItemModal';
import { AJokeModal } from './AJokeModal';

export const ClustersPage = () => {
  const [operationResult, setOperationResult] = useState<{
    result: string;
  }>();

  const [isCreateItemModalVisible, setIsCreateItemModalVisible] = useState<
    boolean
  >(false);

  const [isAJokeModalVisible, setIsAJokeModalVisible] = useState<boolean>(
    false
  );

  const handleOperation = (result: string) => {
    const isEven = result.length % 2 === 0;
    setOperationResult({ result: isEven ? '👍' : '👎' });
    setIsCreateItemModalVisible(false);
  };

  return (
    <div>
      <h3>Clusters Page</h3>

      <button onClick={() => setIsCreateItemModalVisible(true)}>
        Show Modal
      </button>
      <article>
        <h1>{operationResult?.result || 'No Results'}</h1>
      </article>

      <button
        className="secondary"
        onClick={() => setIsAJokeModalVisible(true)}
      >
        A Joke
      </button>

      <CreateItemModal
        isVisible={isCreateItemModalVisible}
        handleClose={handleOperation}
      />
      <AJokeModal
        isVisible={isAJokeModalVisible}
        handleClose={() => setIsAJokeModalVisible(false)}
      />
    </div>
  );
};
