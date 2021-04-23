import { useEffect } from 'react';

const useOnKeypress = (targetKey, callback) => {
  useEffect(() => {
    const listener = ({ key }) => {
      if (key === targetKey) {
        callback();
      }
    };

    window.addEventListener('keydown', listener);

    return () => window.removeEventListener('keydown', listener);
  }, [targetKey, callback]);
};

export default useOnKeypress;
