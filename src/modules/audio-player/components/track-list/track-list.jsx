import PropTypes from 'prop-types';

import { getLowResImage } from 'src/utils/helpers/common';
import { getAllArtists } from 'src/utils/helpers/media-card';
import { IconType } from 'src/utils/constants';

import Poster from 'src/components/poster';
import Icon from 'src/components/icon/icon';

import styled, { css } from 'styled-components/macro';
import { resetButton, resetList, textEllipsis } from 'src/styled/helpers';

const List = styled.ul`
  ${resetList};

  display: flex;
  flex-direction: column;
  padding: calc(var(--gutter) / 2);
`;

const Item = styled.li``;

const Name = styled.h4`
  ${textEllipsis};

  margin: 0;
  color: var(--label-color-primary);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  font-weight: 400;
`;

const Artists = styled.p`
  ${textEllipsis};

  margin: 0;
  color: var(--label-color-secondary);
`;

const Track = styled.button`
  ${resetButton};

  display: flex;
  align-items: center;
  width: 100%;
  padding: calc(var(--gutter) / 3) calc(var(--gutter) / 2);
  border-radius: calc(var(--gutter) / 2);
  outline: none;

  ${({ trackNotAvaliable }) => trackNotAvaliable && css`
    ${Name} {
      color: var(--label-color-secondary);
    }

    ${Artists} {
      color: var(--label-color-secondary);
    }
  `}

  ${({ isActive }) => isActive && css`
    background-color: var(--system-accent);

    ${Name} {
      color: var(--background-primary);
    }

    ${Artists} {
      color: var(--background-primary);
    }
  `}
`;

const PosterWrapper = styled.div`
  min-width: calc(var(--gutter) * 3);
`;

const TrackBody = styled.div`
  ${textEllipsis};

  flex: 1;
  padding-left: var(--gutter);
  text-align: left;
  overflow: hidden;
`;

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
