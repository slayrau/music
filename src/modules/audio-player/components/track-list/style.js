import styled, { css } from 'styled-components/macro';
import { resetButton, resetList, textEllipsis } from 'src/styled/helpers';

const List = styled.ul`
  ${resetList};

  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Item = styled.li``;

const Name = styled.h4`
  ${textEllipsis};

  margin: 0;
  color: var(--label-color-primary);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  font-weight: 400;
`;

const Artists = styled.p`
  ${textEllipsis};

  margin: 0;
  color: var(--label-color-secondary);
`;

const Track = styled.button`
  ${resetButton};

  display: flex;
  align-items: center;
  width: 100%;
  padding: calc(var(--gutter) / 3) calc(var(--gutter) / 2);
  border-radius: calc(var(--gutter) / 2);
  outline: none;

  &[data-focus-visible-added] {
    box-shadow: 0 0 0 4px var(--system-accent), inset 0 0 0 4px var(--background-secondary);
  }

  ${({ trackNotAvaliable }) => trackNotAvaliable && css`
    ${Name} {
      color: var(--label-color-secondary);
    }

    ${Artists} {
      color: var(--label-color-secondary);
    }
  `}

  ${({ isActive }) => isActive && css`
    background-color: var(--system-accent);

    ${Name} {
      color: var(--background-primary);
    }

    ${Artists} {
      color: var(--background-primary);
    }

    .icon {
      color: var(--background-primary);
    }
  `}
`;

const PosterWrapper = styled.div`
  min-width: calc(var(--gutter) * 3);
`;

const TrackBody = styled.div`
  ${textEllipsis};

  flex: 1;
  padding-left: var(--gutter);
  text-align: left;
  overflow: hidden;
`;

export {
  List,
  Item,
  Name,
  Artists,
  Track,
  PosterWrapper,
  TrackBody,
};
