import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getAlbum, selectAlbum } from 'src/slices/album';
import { convertMsToUTCTime, getHumanReadableTime } from 'src/utils/helpers';

import Poster from 'src/components/poster';
import Track from 'src/components/track';

import { Page, Main } from 'src/styled/shared';
import { AlbumHeader, PosterWrapper, Name, MetaData, Row, ArtistsList, Item, Artist, Caption, Content, TracksList, TrackItem, SpotifyLink, Footer } from './style';

const AlbumPage = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const album = useSelector(selectAlbum);

  useEffect(() => {
    dispatch(getAlbum(albumId));
  }, []);

  if (album.loading) {
    return 'loading...';
  }

  const { id, uri, type, name, releaseDate, totalTracks, spotifyUrl, artists, image, copyrights, tracks } = album.data;

  const totalTracksMs = tracks.reduce((acc, track) => { acc += track.duration_ms; return acc; }, 0);
  const totalTracksTime = convertMsToUTCTime(totalTracksMs);
  const albumDuration = getHumanReadableTime(totalTracksTime);

  return (
    <Page>
      <Main>
        <AlbumHeader>
          <PosterWrapper>
            <Poster src={image} />
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
                      to="#"
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
            {tracks.map((track) => (
              <TrackItem key={track.id}>
                <Track
                  id={track.id}
                  trackNumber={track.track_number}
                  name={track.name}
                  artists={track.artists}
                  duration={track.duration_ms}
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
