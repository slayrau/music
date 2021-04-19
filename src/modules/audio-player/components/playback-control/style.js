import styled from 'styled-components/macro';
import { resetButton } from 'src/styled/helpers';

const PlaybackButton = styled.button`
  ${resetButton};

  display: flex;
  color: var(--label-color-primary);

  &:disabled {
    color: var(--label-color-tertiary);
  }

  .icon {
    margin: auto;
  }
`;

const PlaybackContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  column-gap: var(--gutter);

  ${PlaybackButton} {
    width: calc(var(--gutter) * 4);
    height: calc(var(--gutter) * 4);

    &.play-pause {
      .icon {
        width: calc(var(--gutter) * 4);
        height: calc(var(--gutter) * 4);
      }
    }

    .icon {
      width: calc(var(--gutter) * 3);
      height: calc(var(--gutter) * 3);
    }
  }
`;

export {
  PlaybackContainer,
  PlaybackButton,
};
