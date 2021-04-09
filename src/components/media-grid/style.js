import styled from 'styled-components/macro';
import 'swiper/swiper.min.css';
import { resetList, textEllipsis } from 'src/styled/helpers';

const Section = styled.section`
  position: relative;
  padding-bottom: var(--gutter);
  min-width: 0;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: var(--gutter);
    right: var(--gutter);
    bottom: 0;
    height: 1px;
    background-color: var(--background-separator);
  }

  .swiper-wrapper {
    ${resetList};

    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
    padding: 0 var(--gutter);
    row-gap: var(--gutter);
  }

  .swiper-slide {
    margin-top: 0 !important;
    padding-right: calc(var(--gutter) * 2);
  }
`;

const Header = styled.div`
  padding: var(--gutter);
`;

const Title = styled.h2`
  ${textEllipsis};

  margin: 0;
`;

const Body = styled.div``;

export {
  Section,
  Header,
  Title,
  Body,
};
