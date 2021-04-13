import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CardType, QueryType, IconType } from 'src/utils/constants';

import Poster from 'src/components/poster';
import Icon from 'src/components/icon';
import { Card, Body, Row, Name, Meta, Subhead } from './style';

const MediaCard = ({ id, cardType, href, queryType, image, name, subhead, meta }) => {
  return (
    <Card
      as={Link}
      to={href}
      $cardType={cardType}
      $queryType={queryType}
    >
      <Poster
        src={image}
        circle={queryType === QueryType.artist}
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

      {(cardType === CardType.search || queryType === QueryType.track) && (
        <Icon className="chevron-icon" icon={IconType.chevronRight} />
      )}
    </Card>
  );
};

MediaCard.propTypes = {
  cardType: PropTypes.oneOf(Object.values(CardType)).isRequired,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  queryType: PropTypes.oneOf(Object.values(QueryType)).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subhead: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  meta: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MediaCard.defaultProps = {
  subhead: '',
  meta: '',
};

export default MediaCard;
