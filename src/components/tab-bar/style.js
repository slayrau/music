import { NavLink as RouterNavLink } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { resetList } from 'src/styled/helpers';

const List = styled.ul`
  ${resetList};

  display: flex;
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

const Header = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--background-primary);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--background-separator);

  ${({ isLargeMedia }) => isLargeMedia && css`
    top: 0;
    right: unset;
    width: 180px;
    border-right: 1px solid var(--background-separator);

    ${List} {
      flex-direction: column;
    }

    ${NavLink} {
      flex-direction: row;
      justify-content: flex-start;
      padding: 0 var(--gutter);
      font-size: var(--font-size-body);

      .icon {
        margin-right: calc(var(--gutter) / 2);
      }
    }
  `}
`;

const Nav = styled.nav`
`;

const Item = styled.li`
  flex: 1;
`;


export {
  Header,
  Nav,
  List,
  Item,
  NavLink,
};
