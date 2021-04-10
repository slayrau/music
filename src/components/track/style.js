import styled from 'styled-components/macro';
import { textEllipsis } from 'src/styled/helpers';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr auto;
  column-gap: var(--gutter);
  align-items: center;
  height: 56px;
`;

const TrackNumber = styled.span`
  width: calc(var(--gutter) * 2);
  color: var(--label-color-secondary);
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
`;

const Artists = styled.p`
  ${textEllipsis};

  margin: 0;
  color: var(--label-color-secondary);
  font-size: var(--font-size-footnote);
  line-height: var(--line-height-footnote);
`;

const Duration = styled.span`
  color: var(--label-color-secondary);
`;

export {
  Wrapper,
  TrackNumber,
  Body,
  Name,
  Artists,
  Duration,
};
