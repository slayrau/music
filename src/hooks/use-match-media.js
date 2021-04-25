import { useState, useEffect } from 'react';

const useMatchMedia = (mediaPx) => {
  const media = window.matchMedia(`(min-width: ${mediaPx}px)`);
  const [isMatched, setMatched] = useState(media.matches);

  useEffect(() => {
    const listener = ({ matches }) => setMatched(matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMatched;
};

export default useMatchMedia;
