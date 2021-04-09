import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewReleases, getFeaturedPlaylists, selectNewReleases, selectFeaturedPlaylists } from 'src/slices/review';

import MediaGrid from 'src/components/media-grid';
import MediaCard from 'src/components/media-card';

import { Page, PageHeader, Title, Main } from './style';

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
      <PageHeader>
        <Title>Review</Title>
      </PageHeader>

      <Main>
        <MediaGrid title="New Releases">
          {newReleases.items.map((album) => (
            <MediaCard
              key={album.id}
              id={album.id}
              type={album.type}
              image={album.images[1].url}
              name={album.name}
              subhead={album.artists[0].name}
            />
          ))}
        </MediaGrid>

        <MediaGrid title={featuredPlaylists.message}>
          {featuredPlaylists.items.map((playlist) => (
            <MediaCard
              key={playlist.id}
              id={playlist.id}
              type={playlist.type}
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
