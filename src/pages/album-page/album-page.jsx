import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useLocation } from 'react-router-dom';

import { getAlbum, selectAlbum } from 'src/slices/album';
import { setTracks, selectAudioPlayer, setPlayingTrack, setPlaying } from 'src/slices/audio-player';

import { QueryType } from 'src/utils/constants';
import { convertMsToUTCTime, getHumanReadableTime, getMediumResImage } from 'src/utils/helpers/common';

import ScreenSpinner from 'src/components/screen-spinner';
import Poster from 'src/components/poster';
import Track from 'src/components/track';

import { Page, Main, TracksList, TrackItem, SpotifyLink } from 'src/styled/shared';
import { AlbumHeader, PosterWrapper, Name, MetaData, Row, ArtistsList, Item, Artist, Caption, Content, Footer } from './style';

const AlbumPage = () => {
  const { albumId, trackId } = useParams();
  const location = useLocation();
  const { data, loading, error } = useSelector(selectAlbum);
  const { playing, playingTrack } = useSelector(selectAudioPlayer);
  const dispatch = useDispatch();

  const handleTrackClick = (id) => {
    const clickedTrack = data.tracks.find((track) => track.id === id);

    if (id !== playingTrack.id) {
      dispatch(setTracks(data.tracks));
      dispatch(setPlayingTrack(clickedTrack));
      dispatch(setPlaying(true));
    }

    if (id === playingTrack.id) {
      dispatch(setPlaying(!playing));
    }
  };

  useEffect(() => {
    dispatch(getAlbum(albumId));
  }, [dispatch, albumId]);

  useEffect(() => {
    const trackIdInState = location.state;
    const stateTrack = data.tracks.find((track) => track.id === trackIdInState);

    if (!trackIdInState || !stateTrack) return;

    console.log(stateTrack);

    dispatch(setTracks(data.tracks));
    dispatch(setPlayingTrack(stateTrack));
    dispatch(setPlaying(true));
  }, [dispatch, location, albumId, data.tracks]);

  if (loading) {
    return <ScreenSpinner />;
  }

  const { name, releaseDate, totalTracks, spotifyUrl, images, artists, copyrights } = data.album;

  const totalTracksMs = data.tracks.reduce((acc, track) => { acc += track.durationMs; return acc; }, 0);
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
            {data.tracks.map((track) => (
              <TrackItem key={track.id}>
                <Track
                  id={track.id}
                  previewUrl={track.previewUrl}
                  trackNumber={track.trackNumber}
                  name={track.name}
                  artists={track.artists}
                  duration={track.durationMs}
                  onTrackClick={() => handleTrackClick(track.id)}
                  playing={playing}
                  isPlayingTrack={track.id === playingTrack?.id}
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
