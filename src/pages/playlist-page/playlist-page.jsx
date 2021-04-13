import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPlaylist, selectPlaylist } from 'src/slices/playlist';

import { CardType } from 'src/utils/constants';
import { getHighResImage } from 'src/utils/helpers/common';

import ScreenSpinner from 'src/components/screen-spinner';
import Poster from 'src/components/poster';
import Track from 'src/components/track';

import { Page, Header, Title, Main, TracksList, TrackItem, SpotifyLink } from 'src/styled/shared';
import { Info, Description, Content, Footer } from './style';

const PlaylistPage = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector(selectPlaylist);

  useEffect(() => {
    dispatch(getPlaylist(playlistId));
  }, [dispatch, playlistId]);

  if (playlist.loading) {
    return <ScreenSpinner />;
  }

  console.log(playlist);

  return (
    <Page>
      <Main>
        <Header>
          <Poster src={getHighResImage(playlist.data.images)} placeholderType={CardType.playlist} />

          <Info>
            <Title>{playlist.data.name}</Title>
            <Description>{playlist.data.description}</Description>
          </Info>
        </Header>

        <Content>
          <TracksList>
            {playlist.tracks.map((track, index) => (
              <TrackItem key={track.id + index}>
                <Track
                  key={track.id}
                  id={track.id}
                  trackNumber={index + 1}
                  name={track.name}
                  artists={track.artists}
                  duration={track.durationMs}
                />
              </TrackItem>
            ))}
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
      </Main>
    </Page>
  );
};

export default PlaylistPage;
