import styled, { css } from 'styled-components/macro';

import MediaCardType from 'src/utils/constants/media-card-type';
import { textEllipsis, lineClamp } from 'src/styled/helpers';

const Subhead = styled.span`
  color: var(--label-color-secondary);
  font-size: var(--font-size-subhead);
  line-height: var(--line-height-subhead);
`;

const Card = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: calc(var(--gutter) / 2);

  ${(props) => props.type === MediaCardType.album && css`
    ${Subhead} {
      ${textEllipsis};
    }
  `}

  ${(props) => props.type === MediaCardType.playlist && css`
    ${Subhead} {
      ${lineClamp(2)}
    }
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 8px;
  background-color: var(--background-secondary);
  box-shadow: inset 0 0 0 1px var(--background-separator);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    margin: 1px;
    border-radius: inherit;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`;

const Name = styled.span`
  ${textEllipsis};
`;

export {
  Card,
  ImageWrapper,
  Body,
  Name,
  Subhead,
};
