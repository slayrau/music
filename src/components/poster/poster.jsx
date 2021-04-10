import PropTypes from 'prop-types';

import { Wrapper } from './style';

const Poster = ({ src, alt }) => {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
    </Wrapper>
  );
};

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Poster.defaultProps = {
  alt: '',
};

export default Poster;
