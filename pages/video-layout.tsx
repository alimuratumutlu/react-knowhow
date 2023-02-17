import React, { useMemo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
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

  return (
    <div>
      <h2>Staged Objects</h2>
      <Container>
        {stagedObjects.map((obj: any, index: React.Key | null | undefined) => (
          <Square key={index} />
        ))}
      </Container>

      <h2>Unstaged Objects</h2>
      <Container>
        {unstagedObjects.map((obj: any, index: React.Key | null | undefined) => (
          <Square key={index} />
        ))}
      </Container>
    </div>
  );
}
