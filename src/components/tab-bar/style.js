import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { resetList } from 'src/styled/helpers';

const Header = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--background-primary);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--background-separator);
`;

const Nav = styled.nav``;

const List = styled.ul`
  ${resetList};

  display: flex;
`;

const Item = styled.li`
  flex: 1;
`;

const NavLink = styled(RouterNavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--tab-bar-size);

  color: var(--label-color-secondary);
  font-size: var(--font-size-footnote);
  line-height: var(--line-height-footnote);
  text-decoration: none;

  &.active {
    color: var(--system-accent);
  }
`;

export {
  Header,
  Nav,
  List,
  Item,
  NavLink,
};
