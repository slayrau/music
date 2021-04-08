import { Children } from 'react';
import PropTypes from 'prop-types';

import { Section, Header, Title, Body, List, Item } from './style';

const MediaGrid = ({ children, title }) => {
  return (
    <Section>
      <Header>
        <Title>{title}</Title>
      </Header>

      <Body>
        <List>
          {Children.map(children, (child) => (
            <Item>{child}</Item>
          ))}
        </List>
      </Body>
    </Section>
  );
};

MediaGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired,
};

export default MediaGrid;
