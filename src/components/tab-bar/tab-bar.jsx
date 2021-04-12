import IconType from 'src/utils/constants/icon-type';
import Icon from 'src/components/icon';

import { Header, Nav, List, Item, NavLink } from './style';

const TabBar = () => {
  return (
    <Header>
      <Nav>
        <List>
          <Item>
            <NavLink to="/review">
              <Icon icon={IconType.grid} />
              Review
            </NavLink>
          </Item>

          <Item>
            <NavLink to="/categories">
              <Icon icon={IconType.lines} />
              Categories
            </NavLink>
          </Item>

          <Item>
            <NavLink to="/search">
              <Icon icon={IconType.search} />
              Search
            </NavLink>
          </Item>
        </List>
      </Nav>
    </Header>
  );
};

export default TabBar;
