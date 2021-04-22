import PropTypes from 'prop-types';

import { getLowResImage } from 'src/utils/helpers/common';
import { getAllArtists } from 'src/utils/helpers/media-card';
import { IconType } from 'src/utils/constants';

import Poster from 'src/components/poster';
import Icon from 'src/components/icon/icon';

import { List, Item, Name, Artists, Track, PosterWrapper, TrackBody } from './style';

const TrackList = ({
  playing,
  playingTrackAvailable,
  playingTrackId,
  tracks,
  onTrackClick,
}) => {
  const playIcon = playing ? IconType.pause : IconType.play;

  return (
    <List>
      {tracks.map((track) => (
        <Item key={track.id}>
          <Track
            isActive={track.id === playingTrackId}
            onClick={() => onTrackClick(track.id)}
            trackNotAvaliable={!track.previewUrl}
            type="button"
          >
            <PosterWrapper>
              <Poster src={getLowResImage(track.images)} placeholderType="track" />
            </PosterWrapper>
            <TrackBody>
              <Name>{track.name}</Name>
              <Artists>{getAllArtists(track.artists)}</Artists>
            </TrackBody>

            {track.id === playingTrackId && (
              <Icon icon={playingTrackAvailable ? playIcon : IconType.notAllowed} />
            )}
          </Track>
        </Item>
      ))}
    </List>
  );
};

TrackList.propTypes = {
  playing: PropTypes.bool.isRequired,
  playingTrackAvailable: PropTypes.bool.isRequired,
  playingTrackId: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTrackClick: PropTypes.func.isRequired,
};

export default TrackList;
