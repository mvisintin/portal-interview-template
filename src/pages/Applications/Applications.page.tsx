import { useState } from 'react';

import { AccordionTab } from './AccordionTab';

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
      <h3>Applications Page</h3>
      <details>
        <summary>Modal button in here</summary>
        <AccordionTab
          openModal={() => setIsModalVisible(true)}
          isModalVisible={isModalVisible}
          handleOperation={handleOperation}
        />
      </details>

      <details open>
        <summary>Applications</summary>
        <ul>
          <li>Application 1</li>
          <li>Application 2</li>
        </ul>
      </details>

      <article>
        <h1>{operationResult?.result || 'No Results'}</h1>
      </article>
    </div>
  );
};
