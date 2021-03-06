import {useLayoutEffect, useState} from 'react';

interface IUseResize {
  width: number;
  height: number;
}

export default function useResize(): IUseResize {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return {height, width};
}
