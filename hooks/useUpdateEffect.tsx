/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

export default function useUpdateEffect(callback: any, dependencies: any) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
}
