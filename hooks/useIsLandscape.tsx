import { useState, useEffect } from 'react';

function useIsLandscape(): boolean {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  const handleOrientationChange = (): void => {
    if (window.innerHeight < window.innerWidth) {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }
  };

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return isLandscape;
}

export default useIsLandscape;
