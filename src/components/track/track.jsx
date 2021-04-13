import PropTypes from 'prop-types';

import { convertMsToUTCTime, getFormatedDuration } from 'src/utils/helpers/common';

import { Wrapper, TrackNumber, Body, Name, Artists, Duration } from './style';

const Track = ({ trackNumber, name, artists, duration, accent }) => {
  const convertedDuration = convertMsToUTCTime(duration);
  const formatedDuration = getFormatedDuration(convertedDuration);

  return (
    <Wrapper accent={accent}>
      <TrackNumber>{trackNumber}</TrackNumber>
      <Body>
        <Name>{name}</Name>
        {artists && <Artists>{artists.map((artist) => artist.name).join(', ')}</Artists>}
      </Body>
      <Duration>{formatedDuration}</Duration>
    </Wrapper>
  );
};

Track.propTypes = {
  trackNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  artists: PropTypes.arrayOf(PropTypes.object),
  accent: PropTypes.bool,
};

Track.defaultProps = {
  artists: null,
  accent: false,
};

export default Track;
