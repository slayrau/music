import styled, { css } from 'styled-components/macro';

import { CardType, QueryType } from 'src/utils/constants';
import { textEllipsis, lineClamp } from 'src/styled/helpers';

const Name = styled.span``;

const Subhead = styled.span`
  color: var(--label-color-secondary);
  font-size: var(--font-size-subhead);
  line-height: var(--line-height-subhead);
`;

const Meta = styled.span`
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

  ${({ $cardType, $queryType }) => {
    if ($cardType === CardType.artist) {
      return css`
        ${Name} {
          ${lineClamp(2)};

          width: 100%;
          text-align: center;
        }
      `;
    }

    if ($cardType === CardType.album) {
      return css`
        ${Name} {
          ${textEllipsis};
        }

        ${Subhead} {
          ${textEllipsis}
        }
      `;
    }

    if ($cardType === CardType.track) {
      return css`
        grid-auto-flow: column;
        column-gap: var(--gutter);
        grid-template-columns: calc(var(--gutter) * 3) 1fr;
        align-items: center;

        ${Name} {
          ${textEllipsis};
        }

        ${Subhead} {
          ${textEllipsis}
        }
      `;
    }

    if ($cardType === CardType.playlist) {
      return css`
        ${Name} {
          ${textEllipsis};
        }

        ${Subhead} {
          ${lineClamp(2)}
        }
      `;
    }

    if ($cardType === CardType.search) {
      return css`
        grid-auto-flow: column;
        column-gap: var(--gutter);
        align-items: center;
        
        ${$queryType === QueryType.artist && css`
          grid-template-columns: calc(var(--gutter) * 4) 1fr;
        `}

        ${$queryType === QueryType.album && css`
          grid-template-columns: calc(var(--gutter) * 4) 1fr;
        `}

        ${$queryType === QueryType.track && css`
          grid-template-columns: calc(var(--gutter) * 3) 1fr;
        `}

        ${$queryType === QueryType.playlist && css`
          grid-template-columns: calc(var(--gutter) * 6) 1fr;
        `}

        ${Name} {
          ${textEllipsis};
        }

        ${Subhead} {
          ${$queryType === QueryType.playlist ? lineClamp(2) : textEllipsis};
        }
      `;
    }

    if ($cardType === CardType.release) {
      return css`
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: var(--gutter);
        align-items: center;

        ${Name} {
          ${lineClamp(2)}

          font-size: var(--font-size-title-1);
          line-height: var(--line-height-title-1);
        }

        ${Subhead} {
          ${textEllipsis}
        }
      `;
    }
  }}

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

export {
  Card,
  Body,
  Row,
  Name,
  Meta,
  Subhead,
};
