import PropTypes from 'prop-types';

import { IconType } from 'src/utils/constants';
import Icon from 'src/components/icon';
import Poster from 'src/components/poster';

import { MiniPlayerContainer, ModalButton, PosterWrapper, TrackName, PlaybackButton } from './style';

const MiniPlayer = ({
  playing,
  playingTrackId,
  playingTrackAvailable,
  nextTrackExist,
  image,
  trackName,
  onOpenModal,
  onPlay,
  onForward,
}) => {
  const playIcon = playing ? IconType.pause : IconType.play;

  return (
    <MiniPlayerContainer>
      <ModalButton
        onClick={onOpenModal}
        type="button"
      >
        <PosterWrapper>
          <Poster src={image} placeholderType="track" />
        </PosterWrapper>

        <TrackName>{trackName}</TrackName>
      </ModalButton>

      <PlaybackButton
        onClick={onPlay}
        disabled={!playingTrackId || !playingTrackAvailable}
        aria-label={playing ? 'Playing' : 'Stoped'}
        type="button"
      >
        {playingTrackId
          ? (
            <Icon
              icon={
                playingTrackAvailable
                  ? playIcon
                  : IconType.notAllowed
              }
            />
          ) : <Icon icon={playIcon} />}
      </PlaybackButton>

      <PlaybackButton
        onClick={onForward}
        disabled={!playingTrackId || !nextTrackExist}
        aria-label="Play next track"
        type="button"
      >
        <Icon icon={IconType.forward} />
      </PlaybackButton>
    </MiniPlayerContainer>
  );
};

MiniPlayer.propTypes = {
  playing: PropTypes.bool.isRequired,
  playingTrackId: PropTypes.string,
  playingTrackAvailable: PropTypes.bool.isRequired,
  nextTrackExist: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,
};

MiniPlayer.defaultProps = {
  playingTrackId: null,
};

export default MiniPlayer;
