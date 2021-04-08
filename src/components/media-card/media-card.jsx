import PropTypes from 'prop-types';

import { Card, ImageWrapper, Body, Name, ArtistName } from './style';

const MediaCard = ({ id, type, image, name, artistName }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={image} alt="" />
      </ImageWrapper>

      <Body>
        <Name>{name}</Name>
        <ArtistName>{artistName}</ArtistName>
      </Body>
    </Card>
  );
};

MediaCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['album']).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default MediaCard;
