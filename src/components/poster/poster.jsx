import { useState } from 'react';
import PropTypes from 'prop-types';

import { QuerySearchType, IconType } from 'src/utils/constants';
import Icon from 'src/components/icon';

import { Wrapper, Placeholder } from './style';

const placeholderIcons = {
  [QuerySearchType.artist]: IconType.person,
  [QuerySearchType.album]: IconType.musicBeamNote,
  [QuerySearchType.track]: IconType.musicCrotchetNote,
  [QuerySearchType.playlist]: IconType.musicList,
};

const Poster = ({ src, alt, circle, placeholderType }) => {
  const [imageError, setImageError] = useState(!src);

  const handleError = () => {
    setImageError(true);
  };

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
  placeholderType: PropTypes.oneOf(Object.values(QuerySearchType)).isRequired,
};

Poster.defaultProps = {
  alt: '',
  circle: false,
};

export default Poster;
