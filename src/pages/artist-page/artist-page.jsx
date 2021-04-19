import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getArtist,
  getArtistAlbums,
  getTopTracks,
  getRelatedArtists,
  selectArtist,
  selectArtistAlbums,
  selectArtistTopTracks,
  selectRelatedArtists,
} from 'src/slices/artist';

import { QueryType, CardType } from 'src/utils/constants';
import { getMediumResImage, getLowResImage } from 'src/utils/helpers/common';

import Poster from 'src/components/poster';
import MediaGrid from 'src/components/media-grid';
import MediaCard from 'src/components/media-card';
import ScreenSpinner from 'src/components/screen-spinner';

import { Page, Main } from 'src/styled/shared';
import { Header, StyledTitle, PosterWrapper, LastReleasedAlbum, LastReleasedAlbumTitle } from './style';

const ArtistPage = () => {
  const { artistId } = useParams();
  const dispatch = useDispatch();
  const artist = useSelector(selectArtist);
  const albums = useSelector(selectArtistAlbums);
  const topTracks = useSelector(selectArtistTopTracks);
  const relatedArtists = useSelector(selectRelatedArtists);

  useEffect(() => {
    dispatch(getArtist(artistId));
    dispatch(getArtistAlbums(artistId));
    dispatch(getTopTracks(artistId));
    dispatch(getRelatedArtists(artistId));
  }, [dispatch, artistId]);

  if (artist.loading || albums.loading || topTracks.loading) {
    return <ScreenSpinner />;
  }

  const lastReleasedAlbum = albums.data.items.slice().sort((a, b) => (a.releaseDate < b.releaseDate ? 1 : -1))[0];

  return (
    <Page>
      <Header>
        <StyledTitle>{artist.data.name}</StyledTitle>

        <PosterWrapper>
          <Poster
            src={getMediumResImage(artist.data.images)}
            placeholderType={QueryType.artist}
            circle
          />
        </PosterWrapper>
      </Header>

      <Main>
        <LastReleasedAlbum>
          <LastReleasedAlbumTitle>Last release</LastReleasedAlbumTitle>

          <MediaCard
            id={lastReleasedAlbum.id}
            cardType={CardType.release}
            queryType={lastReleasedAlbum.queryType}
            image={getMediumResImage(lastReleasedAlbum.images)}
            name={lastReleasedAlbum.name}
            subhead={new Date(lastReleasedAlbum.releaseDate).getFullYear()}
            meta={`${lastReleasedAlbum.totalTracks} tracks`}
            href={`/album/${lastReleasedAlbum.id}`}
          />
        </LastReleasedAlbum>

        {!!topTracks.data.items.length && (
          <MediaGrid
            title="Top Tracks"
            rows={5}
            columns={1}
            rowSeparator
          >
            {topTracks.data.items.map((track) => (
              <MediaCard
                key={track.id}
                id={track.id}
                cardType={CardType.track}
                queryType={track.queryType}
                name={track.name}
                subhead={track.albumName}
                image={getLowResImage(track.images)}
                href={{
                  pathname: `/album/${track.albumId}`,
                  state: track.id,
                }}
              />
            ))}
          </MediaGrid>
        )}

        {!!albums.data.items.length && (
          <MediaGrid
            title="Alumbs & EPs"
            rows={2}
            columns={2}
          >
            {albums.data.items.map((album) => (
              <MediaCard
                key={album.id}
                id={album.id}
                cardType={CardType.album}
                queryType={album.queryType}
                name={album.name}
                subhead={new Date(album.releaseDate).getFullYear()}
                image={getMediumResImage(album.images)}
                href={`/album/${album.id}`}
              />
            ))}
          </MediaGrid>
        )}

        {!!relatedArtists.data.items.length && (
          <MediaGrid
            title="Similar Artists"
            rows={1}
            columns={3}
          >
            {relatedArtists.data.items.map((relatedArtist) => (
              <MediaCard
                key={relatedArtist.id}
                id={relatedArtist.id}
                cardType={CardType.artist}
                queryType={QueryType.artist}
                name={relatedArtist.name}
                image={getMediumResImage(relatedArtist.images)}
                href={`/artist/${relatedArtist.id}`}
              />
            ))}
          </MediaGrid>
        )}
      </Main>
    </Page>
  );
};

export default ArtistPage;
