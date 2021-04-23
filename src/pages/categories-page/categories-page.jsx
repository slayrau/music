import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import { resetCategory, getCategory, selectCategory } from 'src/slices/category';
import { useBreakpointsContext } from 'src/contexts/breakpoints';

import { CardType, categories, IconType } from 'src/utils/constants';
import { getMediumResImage } from 'src/utils/helpers/common';

import Icon from 'src/components/icon';
import MediaCard from 'src/components/media-card';

import { Page, Title, Main } from 'src/styled/shared';
import { Header, GridList, Item, BubbleLink, ResetCategoryButton } from './style';

const CategoriesPage = () => {
  const currentBreakpoint = useBreakpointsContext();
  const { categoryId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const currentCategory = categories[categoryId];

  const handleResetCategory = () => {
    history.push('/categories');
    dispatch(resetCategory());
  };

  useEffect(() => {
    if (categoryId) {
      dispatch(getCategory(categoryId));
    }

    return () => dispatch(resetCategory());
  }, [dispatch, categoryId]);

  return (
    <Page>
      <Header>
        <Title>{currentCategory?.name || 'Categories'}</Title>

        {currentCategory && (
          <ResetCategoryButton
            type="button"
            onClick={handleResetCategory}
          >
            <Icon icon={IconType.xmark} />
          </ResetCategoryButton>
        )}
      </Header>

      <Main>
        {!currentCategory && (
          <GridList>
            {Object.values(categories).map((item) => (
              <Item key={item.id}>
                <BubbleLink
                  as={Link}
                  to={`/categories/${item.id}`}
                >
                  {item.name}
                  <Icon icon={IconType.chevronRight} />
                </BubbleLink>
              </Item>
            ))}
          </GridList>
        )}

        {currentCategory && (
          <GridList breakpoint={currentBreakpoint}>
            {category.data.map((item) => (
              <Item key={item.id}>
                <MediaCard
                  id={item.id}
                  cardType={CardType.playlist}
                  queryType={item.queryType}
                  name={item.name}
                  subhead={item.description}
                  image={getMediumResImage(item.images)}
                  href={`/playlist/${item.id}`}
                />
              </Item>
            ))}
          </GridList>
        )}
      </Main>
    </Page>
  );
};

export default CategoriesPage;
