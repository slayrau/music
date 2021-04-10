import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MediaCardType from 'src/utils/constants/media-card-type';
import Poster from 'src/components/poster';
import { Card, Body, Name, Subhead } from './style';

const MediaCard = ({ id, href, type, image, name, subhead }) => {
  return (
    <Card
      as={Link}
      to={href}
      type={type}
    >
      <Poster src={image} />

      <Body>
        <Name>{name}</Name>
        <Subhead>{subhead}</Subhead>
      </Body>
    </Card>
  );
};

MediaCard.propTypes = {
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf([MediaCardType.album, MediaCardType.playlist]).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired,
};

export default MediaCard;
