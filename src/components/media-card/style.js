import styled, { css } from 'styled-components/macro';

import { MediaCardType, QuerySearchType } from 'src/utils/constants';
import { textEllipsis, lineClamp } from 'src/styled/helpers';

const Subhead = styled.span`
  color: var(--label-color-secondary);
  font-size: var(--font-size-subhead);
  line-height: var(--line-height-subhead);
`;

const Card = styled.a`
  display: grid;
  grid-auto-flow: row;
  row-gap: calc(var(--gutter) / 2);
  color: var(--label-color-primary);
  text-decoration: none;

  ${({ $cardType }) => $cardType === MediaCardType.album && css`
    ${Subhead} {
      ${textEllipsis};
    }
  `}

  ${({ $cardType }) => $cardType === MediaCardType.playlist && css`
    ${Subhead} {
      ${lineClamp(2)}
    }
  `}

  ${({ $cardType, $queryType }) => $cardType === MediaCardType.search && css`
    ${Subhead} {
      ${$queryType === QuerySearchType.playlist ? lineClamp(2) : textEllipsis}
    }

    grid-auto-flow: column;
    grid-template-columns: calc(var(--gutter) * 4) 1fr;
    column-gap: var(--gutter);
    align-items: center;
  `}

  .chevron-icon {
    color: var(--label-color-secondary);
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
`;

const Name = styled.span`
  ${textEllipsis};
`;

const Meta = styled(Subhead)`
  position: relative;
`;

export {
  Card,
  Body,
  Row,
  Name,
  Meta,
  Subhead,
};
