import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import { Section, Header, Title, Body } from './style';

const MediaGrid = ({ children, rows, columns, title }) => {
  return (
    <Section
      rows={rows}
      columns={columns}
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
            <SwiperSlide>{child}</SwiperSlide>
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
  title: PropTypes.string.isRequired,
};

export default MediaGrid;
