import { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

const Poster = ({ src, alt, circle }) => {
  const [imageError, setImageError] = useState(!src);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <Wrapper circle={circle}>
      {!imageError && <img src={src} alt={alt} onError={handleError} />}
    </Wrapper>
  );
};

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  circle: PropTypes.bool,
};

Poster.defaultProps = {
  alt: '',
  circle: false,
};

export default Poster;
