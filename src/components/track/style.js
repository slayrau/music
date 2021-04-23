import styled, { css, keyframes } from 'styled-components/macro';
import { resetButton, textEllipsis } from 'src/styled/helpers';

const accentFrames = keyframes`
  from {
    box-shadow: inset 0 0 0 4px var(--system-accent);
  }

  to {
    box-shadow: unset;
  }
`;

const TrackNumber = styled.span`
  display: flex;
  justify-content: flex-end;
  width: calc(var(--gutter) * 2);
  text-align: right;
  margin-right: var(--gutter);
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: calc(var(--gutter) / 2);
  overflow: hidden;
`;

const Name = styled.span`
  ${textEllipsis};

  margin: 0;
  width: 100%;
  color: var(--label-color-primary);
  text-align: left;
`;

const Artists = styled.p`
  ${textEllipsis};

  margin: 0;
  width: 100%;
  font-size: var(--font-size-footnote);
  line-height: var(--line-height-footnote);
  text-align: left;
`;

const Duration = styled.span`
`;

const TrackButton = styled.button`
  ${resetButton};

  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-right: calc(var(--gutter));
  color: var(--label-color-secondary);
  border-radius: var(--gutter);
  outline: none;

  &[data-focus-visible-added] {
    box-shadow: 0 0 0 4px var(--system-accent), inset 0 0 0 4px var(--background-primary);
  }

  ${({ notAvailable }) => notAvailable && css`
    ${TrackNumber} {
      color: var(--label-color-secondary);
    }

    ${Name} {
      color: var(--label-color-secondary);
    }

    ${Artists} {
      color: var(--label-color-secondary);
    }

    ${Duration} {
      color: var(--label-color-secondary);
    }
  `}

  ${({ accent }) => accent && css`
    box-shadow: inset 0 0 0 4px var(--system-accent);

    animation-name: ${accentFrames};
    animation-duration: 0.25s;
    animation-timing-function: linear;
    animation-delay: 5s;
    animation-fill-mode: forwards;
  `}

  ${({ isPlayingTrack }) => isPlayingTrack && css`
    color: var(--background-primary);
    background-color: var(--system-accent);

    ${TrackNumber} {
      color: var(--background-primary);
    }

    ${Name} {
      color: var(--background-primary);
    }

    ${Artists} {
      color: var(--background-primary);
    }

    ${Duration} {
      color: var(--background-primary);
    }

    .icon {
      margin-right: -4px;
    }
  `}
`;

export {
  TrackButton,
  TrackNumber,
  Body,
  Name,
  Artists,
  Duration,
};
