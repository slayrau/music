import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewReleases, getFeaturedPlaylists, selectNewReleases, selectFeaturedPlaylists } from 'src/slices/review';
import { CardType } from 'src/utils/constants';
import { getAllArtists } from 'src/utils/helpers/media-card';
import { getMediumResImage } from 'src/utils/helpers/common';

import MediaGrid from 'src/components/media-grid';
import MediaCard from 'src/components/media-card';
import ScreenSpinner from 'src/components/screen-spinner';

import { Page, Header, Title, Main } from 'src/styled/shared';

const ReviewPage = () => {
  const dispatch = useDispatch();
  const newReleases = useSelector(selectNewReleases);
  const featuredPlaylists = useSelector(selectFeaturedPlaylists);

  useEffect(() => {
    dispatch(getNewReleases());
    dispatch(getFeaturedPlaylists());
  }, []);

  if (newReleases.loading || featuredPlaylists.loading) {
    return <ScreenSpinner />;
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
          {newReleases.data.items.map((album) => (
            <MediaCard
              key={album.id}
              id={album.id}
              cardType={CardType.album}
              queryType={album.queryType}
              name={album.name}
              subhead={getAllArtists(album.artists)}
              image={getMediumResImage(album.images)}
              href={`/album/${album.id}`}
            />
          ))}
        </MediaGrid>

        <MediaGrid
          title={featuredPlaylists.data.message}
          rows={1}
          columns={2}
        >
          {featuredPlaylists.data.items.map((playlist) => (
            <MediaCard
              key={playlist.id}
              id={playlist.id}
              cardType={CardType.playlist}
              queryType={playlist.queryType}
              name={playlist.name}
              subhead={playlist.description}
              image={getMediumResImage(playlist.images)}
              href={`/playlist/${playlist.id}`}
            />
          ))}
        </MediaGrid>
      </Main>
    </Page>
  );
};

export default ReviewPage;
