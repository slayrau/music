import { Header, Nav, List, Item, NavLink } from './style';

const TabBar = () => {
  return (
    <Header>
      <Nav>
        <List>
          <Item>
            <NavLink to="/review">Review</NavLink>
          </Item>

          <Item>
            <NavLink to="/search">Search</NavLink>
          </Item>
        </List>
      </Nav>
    </Header>
  );
};

export default TabBar;
