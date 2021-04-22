import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPlaylist, selectPlaylist } from 'src/slices/playlist';
import { setPlayingTrack, setTracks, setPlaying, selectAudioPlayer } from 'src/slices/audio-player';
import { useMediaContext } from 'src/contexts/media';

import { CardType } from 'src/utils/constants';
import { getHighResImage } from 'src/utils/helpers/common';

import ScreenSpinner from 'src/components/screen-spinner';
import Poster from 'src/components/poster';
import Track from 'src/components/track';

import { Page, Header, Title, Main, TracksList, TrackItem, SpotifyLink } from 'src/styled/shared';
import { PosterWrapper, Info, Description, Content, Footer, PageContent } from './style';

const PlaylistPage = () => {
  const isLargeMedia = useMediaContext();
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector(selectPlaylist);
  const { playing, playingTrack } = useSelector(selectAudioPlayer);

  const handleTrackClick = (trackId) => {
    const clickedTrack = playlist.tracks.find((track) => track.id === trackId);

    console.log(clickedTrack, trackId);

    if (trackId !== playingTrack.id) {
      dispatch(setTracks(playlist.tracks));
      dispatch(setPlayingTrack(clickedTrack));
      dispatch(setPlaying(true));
    }

    if (trackId === playingTrack.id) {
      dispatch(setPlaying(!playing));
    }
  };

  useEffect(() => {
    dispatch(getPlaylist(playlistId));
  }, [dispatch, playlistId]);

  if (playlist.loading) {
    return <ScreenSpinner />;
  }

  return (
    <Page>
      <Main>
        <PageContent isLargeMedia={isLargeMedia}>
          <Header>
            <PosterWrapper>
              <Poster src={getHighResImage(playlist.data.images)} placeholderType={CardType.playlist} />
            </PosterWrapper>

            <Info>
              <Title>{playlist.data.name}</Title>
              <Description>{playlist.data.description}</Description>
            </Info>
          </Header>

          <Content>
            <TracksList>
              {playlist.tracks.map((track, index) => {
                console.log(track.id);

                return (
                  <TrackItem key={track.id + index}>
                    <Track
                      key={track.id}
                      id={track.id}
                      trackNumber={index + 1}
                      previewUrl={track.previewUrl}
                      name={track.name}
                      artists={track.artists}
                      duration={track.durationMs}
                      onTrackClick={() => handleTrackClick(track.id)}
                      playing={playing}
                      isPlayingTrack={track.id === playingTrack?.id}
                    />
                  </TrackItem>
                )
              })}
            </TracksList>
          </Content>

          <Footer>
            <SpotifyLink
              href={playlist.data.spotifyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Available on Spotify
            </SpotifyLink>
          </Footer>
        </PageContent>
      </Main>
    </Page>
  );
};

export default PlaylistPage;
