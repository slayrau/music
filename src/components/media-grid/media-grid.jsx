import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import { useBreakpointsContext } from 'src/contexts/breakpoints';
import { useMediaContext } from 'src/contexts/media';

import { Section, Header, Title, Body } from './style';

const MediaGrid = ({ children, breakpoints, rowSeparator, title }) => {
  const isLargeMedia = useMediaContext();
  const currentBreakpoint = useBreakpointsContext();
  const { rows, columns } = breakpoints[currentBreakpoint];

  const formatedBreakpoints = {
    0: {
      slidesPerView: breakpoints.xxs.columns,
      slidesPerColumn: breakpoints.xxs.rows,
    },
    320: {
      slidesPerView: breakpoints.xs.columns,
      slidesPerColumn: breakpoints.xs.rows,
    },
    480: {
      slidesPerView: breakpoints.s.columns,
      slidesPerColumn: breakpoints.s.rows,
    },
    768: {
      slidesPerView: breakpoints.m.columns,
      slidesPerColumn: breakpoints.m.rows,
    },
    1024: {
      slidesPerView: breakpoints.l.columns,
      slidesPerColumn: breakpoints.l.rows,
    },
    1200: {
      slidesPerView: breakpoints.xl.columns,
      slidesPerColumn: breakpoints.xl.rows,
    },
    1400: {
      slidesPerView: breakpoints.xxl.columns,
      slidesPerColumn: breakpoints.xxl.rows,
    },
  };

  return (
    <Section
      rows={rows}
      columns={columns}
      rowSeparator={rowSeparator}
      isLargeMedia={isLargeMedia}
    >
      <Header>
        <Title>{title}</Title>
      </Header>

      <Body>
        <Swiper
          wrapperTag="ul"
          slidesPerColumn={rows}
          slidesPerView={columns}
          spaceBetween={isLargeMedia ? -16 : -24}
          observer
          observeSlideChildren
          observeParents
          breakpoints={formatedBreakpoints}
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
  breakpoints: PropTypes.objectOf(PropTypes.object).isRequired,
  rowSeparator: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

MediaGrid.defaultProps = {
  rowSeparator: false,
};

export default MediaGrid;
