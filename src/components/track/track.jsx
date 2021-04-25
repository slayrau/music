import { memo } from 'react';
import PropTypes from 'prop-types';
import { IconType } from 'src/utils/constants';

import { convertMsToUTCTime, getFormatedDuration } from 'src/utils/helpers/common';
import { getAllArtists } from 'src/utils/helpers/media-card';
import Icon from 'src/components/icon';

import { TrackButton, TrackNumber, Body, Name, Artists, Duration } from './style';

const Track = ({ previewUrl, onTrackClick, trackNumber, name, artists, duration, playing, isPlayingTrack }) => {
  const convertedDuration = convertMsToUTCTime(duration);
  const formatedDuration = getFormatedDuration(convertedDuration);
  const playingIcon = playing ? IconType.pause : IconType.play;
  const notAllowedIcon = IconType.notAllowed;

  return (
    <TrackButton
      onClick={onTrackClick}
      notAvailable={!previewUrl}
      isPlayingTrack={isPlayingTrack}
    >
      <TrackNumber>
        {isPlayingTrack
          ? (
            <Icon icon={previewUrl ? playingIcon : notAllowedIcon} />
          ) : trackNumber}
      </TrackNumber>
      <Body>
        <Name>{name}</Name>
        {artists && <Artists>{getAllArtists(artists)}</Artists>}
      </Body>
      <Duration>{formatedDuration}</Duration>
    </TrackButton>
  );
};

Track.propTypes = {
  onTrackClick: PropTypes.func.isRequired,
  previewUrl: PropTypes.string,
  trackNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  artists: PropTypes.arrayOf(PropTypes.object),
  playing: PropTypes.bool.isRequired,
  isPlayingTrack: PropTypes.bool.isRequired,
};

Track.defaultProps = {
  artists: null,
  previewUrl: null,
};

export default memo(Track);
