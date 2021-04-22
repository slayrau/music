import styled, { css } from 'styled-components/macro';
import 'swiper/swiper.min.css';
import { resetList, textEllipsis } from 'src/styled/helpers';

const Section = styled.section`
  position: relative;
  padding-bottom: var(--gutter);
  min-width: 0;
  overflow: hidden;

  &:not(:last-child)::after {
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
    
    ${({ isLargeMedia }) => !isLargeMedia && css`
      padding: 0 var(--gutter);
    `}

    ${({ isLargeMedia }) => isLargeMedia && css`
      padding: 0 var(--gutter);
    `}
  }

  .swiper-slide {
    position: relative;
    margin-top: 0 !important;
    padding: calc(var(--gutter) / 2) 0;

    ${({ isLargeMedia }) => !isLargeMedia && css`
      padding-right: calc(var(--gutter) * 2);
    `}

    ${({ isLargeMedia }) => isLargeMedia && css`
      padding-right: calc(var(--gutter) * 2);
    `}


    ${(props) => props.rowSeparator && css`
      &:not(:nth-child(${props.rows}n))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: calc(var(--gutter) * 2);
        height: 1px;
        background-color: var(--background-separator);
      }
    `}
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: var(--gutter);
  padding-bottom: calc(var(--gutter) / 2);
`;

const Title = styled.h2`
  ${textEllipsis};

  flex: 1;
  margin: 0;
  font-size: var(--font-size-title-2);
  line-height: var(--line-height-title-2);
`;

const Body = styled.div``;

export {
  Section,
  Header,
  Title,
  Body,
};
