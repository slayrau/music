import styled from 'styled-components/macro';
import { textEllipsis, resetList, resetButton } from 'src/styled/helpers';

const Page = styled.div`
  padding-top: var(--audio-player-size);
  padding-bottom: calc(var(--tab-bar-size) + var(--audio-player-size));
`;

const Title = styled.h1`
  ${textEllipsis};
  
  margin: 0;
  font-size: var(--font-size-large-title);
  line-height: var(--line-height-large-title);
`;

const Header = styled.div`
  position: relative;
  padding: var(--gutter);

  &::after {
    content: '';
    position: absolute;
    left: var(--gutter);
    right: var(--gutter);
    bottom: 0;
    height: 1px;
    background-color: var(--background-separator);
  }
`;

const Main = styled.main``;

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

export {
  Page,
  Header,
  Title,
  Main,
  TracksList,
  TrackItem,
  SpotifyLink,
};
