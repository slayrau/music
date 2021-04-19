import { Route, Redirect } from 'react-router-dom';

import { useAuthorization } from 'src/hooks';

import TabBar from 'src/components/tab-bar';
import LaunchScreen from 'src/components/launch-screen';

import AudioPlayer from 'src/modules/audio-player';

import ReviewPage from 'src/pages/review-page';
import CategoriesPage from 'src/pages/categories-page';
import SearchPage from 'src/pages/search-page';
import AlbumPage from 'src/pages/album-page';
import ArtistPage from 'src/pages/artist-page';
import PlaylistPage from 'src/pages/playlist-page';

const App = () => {
  const { loading, error } = useAuthorization();

  if (loading) {
    return <LaunchScreen />;
  }

  return (
    <div>
      <TabBar />
      <AudioPlayer />

      <Route exact path="/review" component={ReviewPage} />
      <Route exact path="/categories" component={CategoriesPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/album/:albumId/:trackId?" component={AlbumPage} />
      <Route exact path="/artist/:artistId" component={ArtistPage} />
      <Route exact path="/playlist/:playlistId" component={PlaylistPage} />
      <Redirect from="/" to="/review" />
    </div>
  );
};

export default App;
