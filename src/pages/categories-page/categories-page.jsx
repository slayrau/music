import { Link } from 'react-router-dom';

import categories from 'src/utils/constants/categories';

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
              </BubbleLink>
            </Item>
          ))}
        </GridList>
      </Main>
    </Page>
  );
};

export default CategoriesPage;
