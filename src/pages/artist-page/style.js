import styled from 'styled-components/macro';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--gutter);
  background: linear-gradient(180deg, var(--background-primary), var(--background-secondary));
`;

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: calc(var(--gutter) * -1);
  font-size: var(--font-size-large-title);
  line-height: var(--line-height-large-title);
  order: 1;
`;

const PosterWrapper = styled.div`
  padding: calc(var(--gutter) * 4);

  .poster {
    box-shadow: 0 var(--gutter) calc(var(--gutter) * 6) var(--background-secondary);
  }
`;

const LastReleasedAlbum = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: var(--gutter);
  padding-top: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: var(--gutter);
    right: var(--gutter);
    height: 1px;
    background-color: var(--background-separator);
  }
`;

const LastReleasedAlbumTitle = styled.h2`
  margin: 0;
  padding-top: var(--gutter);
  padding-bottom: calc(var(--gutter) / 2);
  font-size: var(--font-size-title-2);
  line-height: var(--line-height-title-2);
`;

export {
  Header,
  StyledTitle,
  PosterWrapper,
  LastReleasedAlbum,
  LastReleasedAlbumTitle,
};
