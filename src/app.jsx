import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authorize, selectAuth } from 'src/slices/auth';

import TabBar from 'src/components/tab-bar';

import ReviewPage from 'src/pages/review-page';
import CategoriesPage from 'src/pages/categories-page';
import AlbumPage from 'src/pages/album-page';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  useEffect(() => dispatch(authorize()), []);

  if (auth.loading) {
    return 'loading...';
  }

  if (auth.error) {
    return auth.error.message;
  }

  if (auth.accessToken) {
    return (
      <div>
        <TabBar />

        <Route exact path="/review" component={ReviewPage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/album/:albumId" component={AlbumPage} />
        <Redirect from="/" to="/review" />
      </div>
    );
  }

  return null;
};

export default App;
