import styled from 'styled-components/macro';
import { resetButton, resetList, textEllipsis } from 'src/styled/helpers';

const PlayerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  display: flex;
  flex-direction: column;
  background-color: var(--background-secondary);
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 var(--gutter);
`;

const CloseModalButton = styled.button`
  ${resetButton};

  width: var(--button-size);
  height: var(--button-size);
  margin-left: calc(var(--gutter) * -1);

  .icon {
    color: var(--label-color-primary);
  }
`;

const ModalContent = styled.div`
  flex: 1;
  padding: var(--gutter) calc(var(--gutter) * 3);
`;

const ModalPlayerTabWrapper = styled.div``;

const TrackName = styled.h3`
  ${textEllipsis};

  margin: 0;
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  font-weight: 400;
`;

const ModalPosterWrapper = styled.div`
  padding: 0 calc(var(--gutter) * 3);
  padding-bottom: var(--gutter);
  margin-top: calc(var(--gutter) * -3);
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
`;

const ModalTrackListTabWrapper = styled.div`
  height: 100%;
`;

const TrackListWrapper = styled.div`
  height: 100%;
  margin: calc(var(--gutter) * -1);
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
  PlayerModal,
  ModalHeader,
  CloseModalButton,
  ModalContent,
  TrackName,
  ModalPlayerTabWrapper,
  ModalPosterWrapper,
  ProgressSliderWrapper,
  ArtistsList,
  ArtistItem,
  Artist,
  ModalTrackListTabWrapper,
  TrackListWrapper,
  ModalFooter,
};
