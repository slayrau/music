import PropTypes from 'prop-types';

import { IconType } from 'src/utils/constants';
import Icon from 'src/components/icon';

import { PlaybackContainer, PlaybackButton } from './style';

const PlaybackControl = ({
  playing,
  playingTrackId,
  playingTrackAvailable,
  prevTrackExist,
  nextTrackExist,
  onPlay,
  onBackward,
  onForward,
}) => {
  const playIcon = playing ? IconType.pause : IconType.play;

  return (
    <PlaybackContainer>
      <PlaybackButton
        onClick={onBackward}
        disabled={!prevTrackExist}
        type="button"
      >
        <Icon icon={IconType.backward} />
      </PlaybackButton>

      <PlaybackButton
        className="play-pause"
        type="button"
        disabled={!playingTrackId || !playingTrackAvailable}
        onClick={onPlay}
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
        disabled={!nextTrackExist}
        type="button"
      >
        <Icon icon={IconType.forward} />
      </PlaybackButton>
    </PlaybackContainer>
  );
};

PlaybackControl.propTypes = {
  playing: PropTypes.bool.isRequired,
  playingTrackId: PropTypes.string.isRequired,
  playingTrackAvailable: PropTypes.bool.isRequired,
  prevTrackExist: PropTypes.bool.isRequired,
  nextTrackExist: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onBackward: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,
};

export default PlaybackControl;
