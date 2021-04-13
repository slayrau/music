import styled, { css } from 'styled-components/macro';
import { resetButton, resetList } from 'src/styled/helpers';

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  display: grid;
  grid-auto-flow: row;
  row-gap: calc(var(--gutter) / 2);

  padding: var(--gutter);
  padding-bottom: calc(var(--gutter) / 2);
  min-width: 0;
  
  background-color: var(--background-primary);
  border-bottom: 1px solid var(--background-separator);
  overflow: hidden;
`;

const TabsList = styled.ul`
  ${resetList};

  position: relative;
  display: flex;
  justify-content: start;
  margin: 0 calc(var(--gutter) * -1);
  margin-bottom: -30px;
  padding-bottom: 30px;
  padding-left: var(--gutter);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: '';
    display: block;
    min-width: var(--gutter);
  }
`;

const TabItem = styled.li`
  display: block;
`;

const TabButton = styled.button`
  display: flex;
  padding: calc(var(--gutter) / 2) var(--gutter);
  
  color: var(--label-color-secondary);
  text-decoration: none;
  background-color: transparent;
  border: none;
  border-radius: var(--gutter);
  white-space: nowrap;
  outline: none;

  ${(props) => props.isActive && css`
    color: var(--background-primary);
    background-color: var(--system-accent);
  `}
`;

const Content = styled.div`
`;

const SearchList = styled.ul`
  ${resetList};

  display: flex;
  flex-direction: column;
  margin-bottom: calc(var(--gutter) * 2);
  padding: 0 var(--gutter);
  border-bottom: 1px solid var(--background-separator);
`;

const SearchItem = styled.li`
  padding: calc(var(--gutter) / 2) 0;


  &:not(:last-child) {
    border-bottom: 1px solid var(--background-separator);
  }
`;

const LoadMoreButtonWrapper = styled.div`
  padding: var(--gutter);
  margin-top: calc(var(--gutter) * -2);
`;

const LoadMoreButton = styled.button`
  ${resetButton};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--button-size);

  color: var(--background-primary);
  background-color: var(--system-accent);
  border-radius: var(--gutter);

  &:disabled {
    background-color: transparent;
  }
`;

export {
  Header,
  TabsList,
  TabItem,
  TabButton,
  Content,
  SearchList,
  SearchItem,
  LoadMoreButtonWrapper,
  LoadMoreButton,
};
