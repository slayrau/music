import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useMatchMedia from 'src/hooks/use-match-media';
import { BreakpointType, BreakpointValue } from 'src/utils/constants';

const BreakpointsContext = createContext();

const useBreakpointsContext = () => useContext(BreakpointsContext);

const BreakpointsProvider = ({ children }) => {
  const xxl = useMatchMedia(BreakpointValue[BreakpointType.xxl]);
  const xl = useMatchMedia(BreakpointValue[BreakpointType.xl]);
  const l = useMatchMedia(BreakpointValue[BreakpointType.l]);
  const m = useMatchMedia(BreakpointValue[BreakpointType.m]);
  const s = useMatchMedia(BreakpointValue[BreakpointType.s]);
  const xs = useMatchMedia(BreakpointValue[BreakpointType.xs]);
  const xxs = useMatchMedia(BreakpointValue[BreakpointType.xxs]);

  const findCurrentBreakpointType = useCallback(() => {
    if (xxl) return BreakpointType.xxl;
    if (xl) return BreakpointType.xl;
    if (l) return BreakpointType.l;
    if (m) return BreakpointType.m;
    if (s) return BreakpointType.s;
    if (xs) return BreakpointType.xs;
    if (xxs) return BreakpointType.xxs;
  }, [xxl, xl, l, m, s, xs, xxs]);

  const [currentBreakpointType, setCurrentBreakpointType] = useState(findCurrentBreakpointType);

  useEffect(() => {
    setCurrentBreakpointType(findCurrentBreakpointType);
  }, [findCurrentBreakpointType]);

  return (
    <BreakpointsContext.Provider value={currentBreakpointType}>
      {children}
    </BreakpointsContext.Provider>
  );
};

BreakpointsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export {
  useBreakpointsContext,
  BreakpointsProvider,
};
