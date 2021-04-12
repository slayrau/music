import { Route, Redirect } from 'react-router-dom';

import { useAuthorization } from 'src/hooks';

import TabBar from 'src/components/tab-bar';
import LaunchScreen from 'src/components/launch-screen';

import ReviewPage from 'src/pages/review-page';
import CategoriesPage from 'src/pages/categories-page';
import AlbumPage from 'src/pages/album-page';
import SearchPage from 'src/pages/search-page';

const App = () => {
  const { loading, error } = useAuthorization();

  if (loading) {
    return <LaunchScreen />;
  }

  return (
    <div>
      <TabBar />

      <Route exact path="/review" component={ReviewPage} />
      <Route exact path="/categories" component={CategoriesPage} />
      <Route exact path="/album/:albumId" component={AlbumPage} />
      <Route exact path="/search" component={SearchPage} />
      <Redirect from="/" to="/review" />
    </div>
  );
};

export default App;
