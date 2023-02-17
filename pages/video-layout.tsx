import React from 'react';

interface Props {
  objects: any;
}

export default function VideoLayout({ objects }: Props) {
  const stagedObjects = objects.filter((obj: { isStaged: any }) => obj.isStaged);
  const unstagedObjects = objects.filter((obj: { isStaged: any }) => !obj.isStaged);

  return (
    <div>
      <div>
        <h2>Staged Objects</h2>
        <ul>
          {stagedObjects.map((obj: any) => (
            <li key={obj.id}>{obj.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Unstaged Objects</h2>
        <ul>
          {unstagedObjects.map((obj: any) => (
            <li key={obj.id}>{obj.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
