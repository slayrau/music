import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { QueryType, IconType } from 'src/utils/constants';
import Icon from 'src/components/icon';

import { Wrapper, Placeholder } from './style';

const placeholderIcons = {
  [QueryType.artist]: IconType.person,
  [QueryType.album]: IconType.musicBeamNote,
  [QueryType.track]: IconType.musicCrotchetNote,
  [QueryType.playlist]: IconType.musicList,
};

const Poster = ({ src, alt, circle, placeholderType }) => {
  const [imageError, setImageError] = useState(!src);

  const handleError = () => {
    setImageError(true);
  };

  useEffect(() => {
    setImageError(!src);
  }, [src]);

  return (
    <Wrapper className="poster" circle={circle}>
      <Placeholder>
        <Icon icon={placeholderIcons[placeholderType]} />
      </Placeholder>

      {!imageError && (
        <img
          src={src}
          alt={alt}
          onError={handleError}
        />
      )}
    </Wrapper>
  );
};

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  circle: PropTypes.bool,
  placeholderType: PropTypes.oneOf(Object.values(QueryType)).isRequired,
};

Poster.defaultProps = {
  alt: '',
  circle: false,
};

export default Poster;
