import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MediaCardType, QuerySearchType, IconType } from 'src/utils/constants';

import Poster from 'src/components/poster';
import Icon from 'src/components/icon';
import { Card, Body, Row, Name, Meta, Subhead } from './style';

const MediaCard = ({ cardType, id, href, queryType, image, name, subhead, meta }) => {
  return (
    <Card
      as={Link}
      to={href}
      $cardType={cardType}
      $queryType={queryType}
    >
      <Poster
        src={image}
        circle={queryType === QuerySearchType.artist}
        placeholderType={queryType}
      />

      <Body>
        <Row>
          <Name>{name}</Name>
        </Row>
        {subhead && (
          <Row><Subhead>{subhead}</Subhead></Row>
        )}
        {meta && (
          <Row><Meta>{meta}</Meta></Row>
        )}
      </Body>

      {cardType === MediaCardType.search && <Icon className="chevron-icon" icon={IconType.chevronRight} />}
    </Card>
  );
};

MediaCard.propTypes = {
  cardType: PropTypes.oneOf(Object.values(MediaCardType)).isRequired,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  queryType: PropTypes.oneOf(Object.values(QuerySearchType)).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subhead: PropTypes.string,
  meta: PropTypes.string,
};

MediaCard.defaultProps = {
  subhead: '',
  meta: '',
};

export default MediaCard;
