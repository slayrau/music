import PropTypes from 'prop-types';

import MediaCardType from 'src/utils/constants/media-card-type';
import { Card, ImageWrapper, Body, Name, Subhead } from './style';

const MediaCard = ({ id, type, image, name, subhead }) => {
  return (
    <Card type={type}>
      <ImageWrapper>
        <img src={image} alt="" />
      </ImageWrapper>

      <Body>
        <Name>{name}</Name>
        <Subhead>{subhead}</Subhead>
      </Body>
    </Card>
  );
};

MediaCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([MediaCardType.album, MediaCardType.playlist]).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired,
};

export default MediaCard;
