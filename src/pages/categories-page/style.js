import styled from 'styled-components/macro';
import { resetList } from 'src/styled/helpers';

const GridList = styled.ul`
  ${resetList};

  display: grid;
  row-gap: calc(var(--gutter) / 2);
  padding: var(--gutter);
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

  .icon {
    margin-left: auto;
    color: var(--label-color-secondary);
  }
`;

export {
  GridList,
  Item,
  BubbleLink,
};
