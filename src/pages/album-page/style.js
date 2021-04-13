import styled from 'styled-components/macro';
import { resetList } from 'src/styled/helpers';

const AlbumHeader = styled.div`
  padding: var(--gutter);
`;

const PosterWrapper = styled.div`
  margin: 0 calc(var(--gutter) * 4);
  margin-bottom: var(--gutter);
`;

const Name = styled.h1`
  margin: 0;
  font-size: var(--font-size-title-1);
  line-height: var(--line-height-title-1);
  text-align: center;
`;

const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div``;

const ArtistsList = styled.ul`
  ${resetList};

  margin: calc(var(--gutter)) 0;
  margin-top: var(--gutter);
  margin-bottom: calc(var(--gutter) * 1.5);
`;

const Item = styled.li`
  padding: 0 calc(var(--gutter) / 2);
`;

const Artist = styled.a`
  display: block;
  color: var(--system-accent);
  font-size: var(--font-size-title-1);
  line-height: var(--line-height-title-1);
  text-align: center;
  text-decoration: none;
`;

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

const TracksList = styled.ul`
  ${resetList};

  margin-left: calc(var(--gutter) / -2);
  margin-right: calc(var(--gutter) / -2);
`;

const TrackItem = styled.li`
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: calc(var(--gutter) * 3);
    right: calc(var(--gutter) / 2);
    bottom: 0;
    z-index: -1;
    height: 1px;
    background-color: var(--background-separator);
  }
`;

const SpotifyLink = styled.a`
  color: var(--system-accent);
`;

const Footer = styled.div`
  padding: var(--gutter);
`;

export {
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
  TracksList,
  TrackItem,
  SpotifyLink,
  Footer,
};
