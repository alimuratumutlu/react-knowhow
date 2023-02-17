/* eslint-disable react/button-has-type */
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  isHorizontal: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  ${({ isHorizontal }) => (isHorizontal ? 'flex-direction: row' : 'flex-direction: column')};
`;

const Square = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
`;

interface Props {
  objects: any;
}

export default function VideoLayout({ objects }: Props) {
  const [isHorizontal, setIsHorizontal] = useState(true);

  const objectsWithStagedFlag = useMemo(
    () =>
      // Add isStaged property to each object
      objects.map((obj: any) => ({
        ...obj,
        isStaged: false,
      })),
    [objects]
  );

  const [stagedObjects, unstagedObjects] = useMemo(() => {
    const stagedObjectsTemp = objectsWithStagedFlag.filter((obj: any) => obj.isStaged);
    const unstagedObjectsTemp = objectsWithStagedFlag.filter((obj: any) => !obj.isStaged);
    return [stagedObjectsTemp, unstagedObjectsTemp];
  }, [objectsWithStagedFlag]);

  const handleLayoutSwitch = () => {
    setIsHorizontal((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleLayoutSwitch}>
        Switch to {isHorizontal ? 'vertical' : 'horizontal'} layout
      </button>

      <h2>Staged Objects</h2>
      <Container isHorizontal={isHorizontal}>
        {stagedObjects.map((obj: any, index: React.Key | null | undefined) => (
          <Square key={index} />
        ))}
      </Container>

      <h2>Unstaged Objects</h2>
      <Container isHorizontal={isHorizontal}>
        {unstagedObjects.map((obj: any, index: React.Key | null | undefined) => (
          <Square key={index} />
        ))}
      </Container>
    </div>
  );
}
