import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import { Section, Header, Title, Body } from './style';

const MediaGrid = ({ children, rows, columns, rowSeparator, title }) => {
  return (
    <Section
      rows={rows}
      columns={columns}
      rowSeparator={rowSeparator}
    >
      <Header>
        <Title>{title}</Title>
      </Header>

      <Body>
        <Swiper
          wrapperTag="ul"
          slidesPerColumn={rows}
          slidesPerView={columns}
          spaceBetween={-24}
          observer
          observeSlideChildren
        >
          {Children.map(children, (child) => (
            <SwiperSlide tag="li">{child}</SwiperSlide>
          ))}
        </Swiper>
      </Body>
    </Section>
  );
};

MediaGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  rowSeparator: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

MediaGrid.defaultProps = {
  rowSeparator: false,
};

export default MediaGrid;
