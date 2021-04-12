import { Link } from 'react-router-dom';

import { categories, IconType } from 'src/utils/constants';
import Icon from 'src/components/icon';

import { Page, Header, Title, Main } from 'src/styled/shared';
import { GridList, Item, BubbleLink } from './style';

const CategoriesPage = () => {
  return (
    <Page>
      <Header>
        <Title>Categories</Title>
      </Header>

      <Main>
        <GridList>
          {Object.values(categories).map((category) => (
            <Item key={category.id}>
              <BubbleLink
                as={Link}
                to="#"
              >
                {category.name}
                <Icon icon={IconType.chevronRight} />
              </BubbleLink>
            </Item>
          ))}
        </GridList>
      </Main>
    </Page>
  );
};

export default CategoriesPage;
