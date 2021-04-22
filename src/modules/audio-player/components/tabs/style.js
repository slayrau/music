import styled, { css } from 'styled-components/macro';
import { resetButton, resetList } from 'src/styled/helpers';

const TabsList = styled.ul`
  ${resetList};

  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid var(--background-separator);
`;

const TabItem = styled.li`
  padding: 0 calc(var(--gutter) / 2);
`;

const TabButton = styled.button`
  ${resetButton};

  width: calc(var(--gutter) * 3);
  height: calc(var(--gutter) * 3);
  display: flex;
  color: var(--label-color-secondary);
  outline: none;

  ${({ isActive }) => isActive && css`
    color: var(--system-accent);
  `}

  .icon {
    margin: auto;
    pointer-events: none;
  }
`;

export {
  TabsList,
  TabItem,
  TabButton,
};
