import albums from 'src/mocks/new-releases-albums';

import MediaGrid from 'src/components/media-grid';
import MediaCard from 'src/components/media-card';

const App = () => {
  return (
    <div>
      <MediaGrid title="New Releases">
        {albums.map((album) => (
          <MediaCard
            key={album.id}
            id={album.id}
            type={album.type}
            image={album.images[1].url}
            name={album.name}
            artistName={album.artists[0].name}
          />
        ))}
      </MediaGrid>
    </div>
  );
};

export default App;
