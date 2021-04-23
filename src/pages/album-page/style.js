import styled, { css } from 'styled-components/macro';
import { resetList } from 'src/styled/helpers';
import { BreakpointType } from 'src/utils/constants';

const AlbumHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--gutter);
`;

const PosterWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: var(--gutter);
  max-width: 320px;
  width: 100%;
`;

const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtistsList = styled.ul`
  ${resetList};

  margin: calc(var(--gutter)) 0;
  margin-top: var(--gutter);
  margin-bottom: calc(var(--gutter) * 1.5);
`;

const Item = styled.li`
  position: relative;
  margin-right: var(--gutter);
`;

const Artist = styled.a`
  display: block;
  color: var(--system-accent);
  font-size: var(--font-size-title-1);
  line-height: var(--line-height-title-1);
  text-align: center;
  text-decoration: none;
  outline: none;

  &[data-focus-visible-added] {
    box-shadow: 0 0 0 4px var(--system-accent);
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const Name = styled.h1`
  margin: 0;
  font-size: var(--font-size-title-1);
  line-height: var(--line-height-title-1);
  text-align: center;
`;

const PageContent = styled.div`
  ${({ breakpoint }) => (breakpoint === BreakpointType.l || breakpoint === BreakpointType.xl || breakpoint === BreakpointType.xxl) && css`
    ${AlbumHeader} {
      flex-direction: row;
    }

    ${PosterWrapper} {
      width: 270px;
      margin: 0;
    }

    ${MetaData} {
      align-items: flex-start;
      padding-left: var(--gutter);
    }

    ${ArtistsList} {
      display: flex;
      flex-wrap: wrap;

      ${Item}:not(:last-child) {
        &::after {
          content: ',';
          position: absolute;
          bottom: 4px;
          right: -8px;
          color: var(--system-accent);
          font-size: var(--font-size-large-title);
        }
      }
    }

    ${Name} {
      margin-top: calc(var(--gutter) * 2);
    }
  `}
`;

const Row = styled.div``;

const Caption = styled.p`
  margin: 0;
  color: var(--label-color-secondary);
  font-size: var(--font-size-callout);
  line-height: var(--line-height-callout);
  text-transform: uppercase;
`;

const Content = styled.div`
  position: relative;
  padding: calc(var(--gutter) / 2) var(--gutter);

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: var(--gutter);
    right: var(--gutter);
    height: 1px;
    background-color: var(--background-separator);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

const Footer = styled.div`
  padding: var(--gutter);
`;

export {
  PageContent,
  AlbumHeader,
  PosterWrapper,
  Name,
  MetaData,
  Row,
  ArtistsList,
  Item,
  Artist,
  Caption,
  Content,
  Footer,
};
