import styled, { css } from 'styled-components/macro';
import { resetButton, resetList } from 'src/styled/helpers';
import { BreakpointType } from 'src/utils/constants';

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--gutter);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: var(--gutter);
    right: var(--gutter);
    height: 1px;
    background-color: var(--background-separator);
  }
`;

const GridList = styled.ul`
  ${resetList};

  display: grid;
  row-gap: calc(var(--gutter) / 2);
  padding: var(--gutter);

  ${({ breakpoint }) => (breakpoint === BreakpointType.xxs || breakpoint === BreakpointType.xs || breakpoint === BreakpointType.s) && css`
    gap: var(--gutter);
    grid-template-columns: repeat(2, 1fr);
  `}
  
  ${({ breakpoint }) => (breakpoint === BreakpointType.m) && css`
    gap: var(--gutter);
    grid-template-columns: repeat(3, 1fr);
  `}
  
  ${({ breakpoint }) => (breakpoint === BreakpointType.l) && css`
    gap: var(--gutter);
    grid-template-columns: repeat(4, 1fr);
  `}
  
  ${({ breakpoint }) => (breakpoint === BreakpointType.xl) && css`
    gap: var(--gutter);
    grid-template-columns: repeat(5, 1fr);
  `}
  
  ${({ breakpoint }) => (breakpoint === BreakpointType.xxl) && css`
    gap: var(--gutter);
    grid-template-columns: repeat(6, 1fr);
  `}
`;

const Item = styled.li``;

const BubbleLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 var(--gutter);
  padding-right: calc(var(--gutter) / 2);
  height: var(--button-size);
  
  color: var(--label-color-primary);
  text-decoration: none;
  background-color: var(--background-secondary);
  border-radius: calc(var(--gutter) / 2);
  outline: none;

  &[data-focus-visible-added] {
    box-shadow: 0 0 0 4px var(--system-accent);
  }

  .icon {
    margin-left: auto;
    color: var(--label-color-secondary);
  }
`;

const ResetCategoryButton = styled.button`
  ${resetButton};

  display: flex;
  width: var(--button-size);
  height: var(--button-size);
  margin-left: var(--gutter);

  color: var(--system-accent);
  background-color: var(--background-secondary);
  border-radius: calc(var(--gutter) / 2);
  outline: none;

  &[data-focus-visible-added] {
    box-shadow: 0 0 0 4px var(--system-accent);
  }

  .icon {
    margin: auto;
  }
`;

export {
  Header,
  GridList,
  Item,
  BubbleLink,
  ResetCategoryButton,
};
