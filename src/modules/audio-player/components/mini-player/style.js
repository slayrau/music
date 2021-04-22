import styled, { css } from 'styled-components/macro';
import { resetButton, textEllipsis } from 'src/styled/helpers';

const MiniPlayerContainer = styled.div`
  position: fixed;
  bottom: var(--tab-bar-size);
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  height: var(--audio-player-size);
  background-color: var(--background-primary);
  box-shadow: 0 1px 0 var(--background-separator), inset 0 1px 0 var(--background-separator);
  z-index: 150;

  ${({ isLargeMedia }) => isLargeMedia && css`
    top: 0;
    left: 180px;
    right: 0;
  `}
`;

const TrackName = styled.h3`
  ${textEllipsis};

  margin: 0;
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  font-weight: 400;
`;

const ModalButton = styled.button`
  ${resetButton};

  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: var(--gutter);
  color: var(--label-color-primary);
  overflow: hidden;

  ${TrackName} {
    margin-left: var(--gutter);
  }
`;

const PosterWrapper = styled.div`
  min-height: calc(var(--gutter) * 3);
  min-width: calc(var(--gutter) * 3);

  .icon {
    width: calc(var(--gutter) * 2);
    height: calc(var(--gutter) * 2);
  }
`;

const PlaybackButton = styled.button`
  ${resetButton};

  display: flex;
  width: calc(var(--gutter) * 4);
  height: 100%;
  color: var(--label-color-primary);

  &:disabled {
    color: var(--label-color-tertiary);
  }

  .icon {
    margin: auto;
    width: calc(var(--gutter) * 3);
    height: calc(var(--gutter) * 3);
  }
`;

export {
  MiniPlayerContainer,
  ModalButton,
  PosterWrapper,
  TrackName,
  PlaybackButton,
};
