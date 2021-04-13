import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getAlbum, getAlbumTracks, selectAlbum, selectAlbumTracks } from 'src/slices/album';

import { QueryType } from 'src/utils/constants';
import { convertMsToUTCTime, getHumanReadableTime, getMediumResImage } from 'src/utils/helpers/common';

import ScreenSpinner from 'src/components/screen-spinner';
import Poster from 'src/components/poster';
import Track from 'src/components/track';

import { Page, Main, TracksList, TrackItem, SpotifyLink } from 'src/styled/shared';
import { AlbumHeader, PosterWrapper, Name, MetaData, Row, ArtistsList, Item, Artist, Caption, Content, Footer } from './style';

const AlbumPage = () => {
  const { albumId, trackId } = useParams();
  const dispatch = useDispatch();
  const album = useSelector(selectAlbum);
  const tracks = useSelector(selectAlbumTracks);

  useEffect(() => {
    dispatch(getAlbum(albumId));
    dispatch(getAlbumTracks(albumId));
  }, []);

  if (album.loading || tracks.loading) {
    return <ScreenSpinner />;
  }

  const { name, releaseDate, totalTracks, spotifyUrl, images, artists, copyrights } = album.data;

  const totalTracksMs = tracks.data.items.reduce((acc, track) => { acc += track.durationMs; return acc; }, 0);
  const totalTracksTime = convertMsToUTCTime(totalTracksMs);
  const albumDuration = getHumanReadableTime(totalTracksTime);

  return (
    <Page>
      <Main>
        <AlbumHeader>
          <PosterWrapper>
            <Poster src={getMediumResImage(images)} placeholderType={QueryType.album} />
          </PosterWrapper>

          <MetaData>
            <Row>
              <Name>{name}</Name>
            </Row>

            <Row>
              <ArtistsList>
                {artists.map((artist) => (
                  <Item key={artist.id}>
                    <Artist
                      as={Link}
                      to={`/artist/${artist.id}`}
                    >
                      {artist.name}
                    </Artist>
                  </Item>
                ))}
              </ArtistsList>
            </Row>

            <Row>
              <Caption>Released {new Date(releaseDate).getFullYear()}</Caption>
            </Row>

            <Row>
              <Caption>{totalTracks} Songs</Caption>
            </Row>

            <Row>
              <Caption>{albumDuration}</Caption>
            </Row>
          </MetaData>
        </AlbumHeader>

        <Content>
          <TracksList>
            {tracks.data.items.map((track) => (
              <TrackItem key={track.id}>
                <Track
                  id={track.id}
                  trackNumber={track.trackNumber}
                  name={track.name}
                  artists={track.artists}
                  duration={track.durationMs}
                  accent={track.id === trackId}
                />
              </TrackItem>
            ))}
          </TracksList>
        </Content>

        <Footer>
          {copyrights.map((cr) => (
            <Row key={cr.type}>
              <Caption>{cr.text}</Caption>
            </Row>
          ))}

          <SpotifyLink
            href={spotifyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Available on Spotify
          </SpotifyLink>
        </Footer>
      </Main>
    </Page>
  );
};

export default AlbumPage;
