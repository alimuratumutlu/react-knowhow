/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import React, { MouseEventHandler, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  isHorizontal: boolean;
}

interface SquareProps {
  isStaged: boolean;
  onToggle: () => void;
}

interface SquareButton {
  isStaged: boolean;
}

interface VideoLayoutProps {
  objects: any;
}

interface ResizerProps {
  onMouseDown: MouseEventHandler<HTMLDivElement>;
}

const SquareContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  position: relative;
`;

const SquareButton = styled.button<SquareButton>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: ${({ isStaged }) => (isStaged ? 'green' : 'red')};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

function Square({ isStaged, onToggle }: SquareProps) {
  const handleToggle = () => {
    onToggle();
  };

  return (
    <SquareContainer>
      <SquareButton isStaged={isStaged} onClick={handleToggle}>
        {isStaged ? '✓' : 'x'}
      </SquareButton>
    </SquareContainer>
  );
}

const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 20px;
`;

const Resizer = styled.div<ResizerProps>`
  position: absolute;
  width: 10px;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #eee;
  cursor: col-resize;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ isHorizontal }) => (isHorizontal ? 'flex-direction: row' : 'flex-direction: column')};
`;

export default function VideoLayout({ objects }: VideoLayoutProps) {
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [remoteStreams, setRemoteStreams] = useState(objects);

  const [width, setWidth] = useState<any>(400);
  const [height, setHeight] = useState<any>(400);

  const containerRef = useRef(null);
  const resizerRef = useRef(null);
  const startPosition = useRef<number | null>(null);

  // const objectsWithStagedFlag = useMemo(
  //   () =>
  //     // Add isStaged property to each object
  //     remoteStreams.map((obj: any) => ({
  //       ...obj,
  //       isStaged: false,
  //     })),
  //   [remoteStreams]
  // );

  const objectsWithStagedFlag = useMemo(() => {
    // Add isStaged property to each object and sort the array based on the specified conditions
    const talkingObjs = objects.filter((obj: any) => obj.isTalking);
    const videoOnObjs = objects.filter((obj: any) => obj.isVideoOn && !obj.isTalking);
    const muteObjs = objects.filter((obj: any) => obj.isMute && !obj.isTalking && !obj.isVideoOn);
    const otherObjs = objects.filter((obj: any) => !obj.isTalking && !obj.isVideoOn && !obj.isMute);

    const objectsWithStagedFlag = [
      ...talkingObjs,
      ...videoOnObjs.slice(0 - talkingObjs.length),
      ...muteObjs.slice(0 - talkingObjs.length - videoOnObjs.length),
      ...otherObjs.slice(0 - talkingObjs.length - videoOnObjs.length - muteObjs.length),
    ].map((obj) => ({
      ...obj,
    }));

    return objectsWithStagedFlag;
  }, [remoteStreams]);

  const [stagedObjects, unstagedObjects] = useMemo(() => {
    const stagedObjectsTemp = objectsWithStagedFlag.filter((obj: any) => obj.isStaged);
    const unstagedObjectsTemp = objectsWithStagedFlag.filter((obj: any) => !obj.isStaged);
    return [stagedObjectsTemp, unstagedObjectsTemp];
  }, [objectsWithStagedFlag]);

  const toggleIsStaged = (index: number) => {
    const newObjects = [...objectsWithStagedFlag];
    newObjects[index].isStaged = !newObjects[index].isStaged;
    setRemoteStreams(newObjects);
  };

  const handleLayoutSwitch = () => {
    setIsHorizontal((prev) => !prev);
  };

  const handleMouseMove = (event: any) => {
    let diffX;

    if (startPosition.current) {
      diffX = event.clientX - startPosition.current;
    }

    const { offsetWidth, offsetHeight } = containerRef.current!;

    if (isHorizontal) {
      setWidth(offsetWidth + diffX);
    } else {
      setHeight(offsetHeight + diffX);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (event: { pageX: number | null; pageY: number | null }) => {
    if (!event.pageX) return;
    if (isHorizontal) {
      startPosition.current = event.pageX;
    } else {
      startPosition.current = event.pageY;
    }
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div>
      <button onClick={handleLayoutSwitch}>
        Switch to {isHorizontal ? 'vertical' : 'horizontal'} layout
      </button>

      <h2>Staged Objects</h2>
      <ContainerWrapper style={{ width, height }}>
        <Container ref={containerRef} isHorizontal={isHorizontal}>
          {stagedObjects.map((obj: any, index: number) => (
            <Square key={index} isStaged={obj.isStaged} onToggle={() => toggleIsStaged(index)} />
          ))}
        </Container>
        <Resizer ref={resizerRef} onMouseDown={handleMouseDown} />
      </ContainerWrapper>

      <h2>Unstaged Objects</h2>
      <ContainerWrapper style={{ width, height }}>
        <Container ref={containerRef} isHorizontal={isHorizontal}>
          {unstagedObjects.map((obj: any, index: number) => (
            <Square
              key={index}
              isStaged={obj.isStaged}
              onToggle={() => toggleIsStaged(index + stagedObjects.length)}
            />
          ))}
        </Container>
        <Resizer ref={resizerRef} onMouseDown={handleMouseDown} />
      </ContainerWrapper>
    </div>
  );
}
