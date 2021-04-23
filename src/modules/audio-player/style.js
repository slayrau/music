import styled, { css } from 'styled-components/macro';
import { resetButton, resetList, textEllipsis } from 'src/styled/helpers';

const TrackListWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: calc(var(--gutter) * 1/2);
`;

const ModalRow = styled.div``;

const ModalInfoContainer = styled.div`
  flex: 1;
`;

const ModalContent = styled.div`
  flex: 1;
`;

const ModalPosterWrapper = styled.div`
  padding: 0 calc(var(--gutter) * 3);
  padding-bottom: var(--gutter);
`;

const AudioPlayerContainer = styled.div`
  position: relative;
`;

const ModalPlayerControlsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--gutter) calc(var(--gutter) * 3);
`;

const PlayerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: none;

  display: flex;
  flex-direction: column;
  background-color: var(--background-secondary);

  ${({ isLargeMedia }) => isLargeMedia && css`
    position: fixed;
    left: 180px;
    top: var(--audio-player-size);
    right: unset;
    bottom: unset;
    width: calc(100% - 180px);
    height: calc(100% - var(--audio-player-size)); 
    max-height: 400px;
    overflow-x: hidden;
    
    ${ModalPlayerControlsWrapper} {
      display: flex;
      align-items: center;
    }

    ${ModalPosterWrapper} {
      width: 100%;
      max-width: 200px;
      margin-top: 0;
      padding-left: 0;
    }
  `}
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 var(--gutter);
  background-color: var(--background-secondary);

  &::after {
    content: '';
    position: absolute;
    left: var(--gutter);
    right: var(--gutter);
    bottom: 0;
    z-index: -1;
    height: 1px;
    background-color: var(--background-separator);
  }
`;

const CloseModalButton = styled.button`
  ${resetButton};

  width: var(--button-size);
  height: var(--button-size);
  margin-left: calc(var(--gutter) * -1);
  outline: none;

  &[data-focus-visible-added] {
    box-shadow: inset 0 0 0 4px var(--system-accent);
  }

  .icon {
    color: var(--label-color-primary);
  }
`;

const ModalPlayerTabWrapper = styled.div``;

const TrackName = styled.h3`
  ${textEllipsis};

  margin: 0;
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  font-weight: 400;
`;

const ProgressSliderWrapper = styled.div`
  padding: var(--gutter) 0;
`;

const ArtistsList = styled.ul`
  ${resetList};

  display: flex;
  flex-wrap: wrap;
`;

const ArtistItem = styled.li`
  padding-right: calc(var(--gutter) / 2);
`;

const Artist = styled.a`
  color: var(--system-accent);
  text-decoration: none;

  outline: none;

  &[data-focus-visible-added] {
    box-shadow: 0 0 0 4px var(--system-accent);
  }
`;

const ModalFooter = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 var(--gutter);
  background-color: var(--background-secondary);
`;

export {
  ModalRow,
  ModalInfoContainer,
  AudioPlayerContainer,
  PlayerModal,
  ModalHeader,
  CloseModalButton,
  ModalContent,
  TrackName,
  ModalPlayerTabWrapper,
  ModalPlayerControlsWrapper,
  ModalPosterWrapper,
  ProgressSliderWrapper,
  ArtistsList,
  ArtistItem,
  Artist,
  TrackListWrapper,
  ModalFooter,
};
