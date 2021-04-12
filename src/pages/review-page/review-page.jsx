import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewReleases, getFeaturedPlaylists, selectNewReleases, selectFeaturedPlaylists } from 'src/slices/review';

import MediaGrid from 'src/components/media-grid';
import MediaCard from 'src/components/media-card';

import { Page, Header, Title, Main } from 'src/styled/shared';
import { MediaCardType, QuerySearchType } from 'src/utils/constants';

const ReviewPage = () => {
  const dispatch = useDispatch();
  const newReleases = useSelector(selectNewReleases);
  const featuredPlaylists = useSelector(selectFeaturedPlaylists);

  useEffect(() => {
    dispatch(getNewReleases());
    dispatch(getFeaturedPlaylists());
  }, []);

  if (newReleases.loading || featuredPlaylists.loading) {
    return 'loading...';
  }

  return (
    <Page>
      <Header>
        <Title>Review</Title>
      </Header>

      <Main>
        <MediaGrid
          title="New Releases"
          rows={2}
          columns={2}
        >
          {newReleases.items.map((album) => (
            <MediaCard
              key={album.id}
              id={album.id}
              href={`/album/${album.id}`}
              cardType={MediaCardType.album}
              queryType={QuerySearchType.album}
              image={album.images[1].url}
              name={album.name}
              subhead={album.artists[0].name}
            />
          ))}
        </MediaGrid>

        <MediaGrid
          title={featuredPlaylists.message}
          rows={1}
          columns={2}
        >
          {featuredPlaylists.items.map((playlist) => (
            <MediaCard
              key={playlist.id}
              id={playlist.id}
              href="#"
              cardType={MediaCardType.playlist}
              queryType={QuerySearchType.playlist}
              image={playlist.images[0].url}
              name={playlist.name}
              subhead={playlist.description}
            />
          ))}
        </MediaGrid>
      </Main>
    </Page>
  );
};

export default ReviewPage;
