import styled, { css, keyframes } from 'styled-components/macro';
import { textEllipsis } from 'src/styled/helpers';

const accentFrames = keyframes`
  from {
    box-shadow: inset 0 0 0 4px var(--system-accent);
  }

  to {
    box-shadow: unset;
  }
`;

const TrackNumber = styled.span`
  width: calc(var(--gutter) * 2);
  text-align: right;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Name = styled.span`
  ${textEllipsis};

  margin: 0;
  color: var(--label-color-primary);
`;

const Artists = styled.p`
  ${textEllipsis};

  margin: 0;
  font-size: var(--font-size-footnote);
  line-height: var(--line-height-footnote);
`;

const Duration = styled.span`
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr auto;
  column-gap: var(--gutter);
  align-items: center;

  height: 56px;
  padding-right: calc(var(--gutter));
  color: var(--label-color-secondary);
  border-radius: var(--gutter);

  ${({ accent }) => accent && css`
    box-shadow: inset 0 0 0 4px var(--system-accent);

    animation-name: ${accentFrames};
    animation-duration: 0.25s;
    animation-timing-function: linear;
    animation-delay: 5s;
    animation-fill-mode: forwards;
  `}
`;

export {
  Wrapper,
  TrackNumber,
  Body,
  Name,
  Artists,
  Duration,
};
