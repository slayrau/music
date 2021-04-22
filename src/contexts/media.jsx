import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import useMatchMedia from 'src/hooks/use-match-media';

const MediaContext = createContext();

const useMediaContext = () => useContext(MediaContext);

const MediaProvider = ({ children }) => {
  const isLargeMedia = useMatchMedia(768);

  return (
    <MediaContext.Provider value={isLargeMedia}>
      {children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export {
  useMediaContext,
  MediaProvider,
};
