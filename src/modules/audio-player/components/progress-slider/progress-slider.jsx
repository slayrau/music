import { useState } from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

import { convertMsToUTCTime, getFormatedDuration } from 'src/utils/helpers/common';

import { ProgressContainer, SliderWrapper, Info, Duration } from './style';

const ProgressSlider = ({
  playingTrackAvailable,
  duration,
  loadedSeconds,
  playedSeconds,
  onChangeProgress,
  onSeekStart,
  onSeekEnd,
  onSeekChange,
}) => {
  const getFormated = (sec) => {
    const ms = Math.floor(sec * 1000);
    return getFormatedDuration(convertMsToUTCTime(ms));
  };

  const currentTime = getFormated(playedSeconds);
  const remaining = getFormated(duration - playedSeconds);

  const handleChange = (value) => {

  };

  const handleAfterChange = (value) => {

  };

  return (
    <ProgressContainer>
      <SliderWrapper
        // eslint-disable-next-line no-mixed-operators
        buffered={100 - (100 / duration * loadedSeconds)}
      >
        <Slider
          onBeforeChange={onSeekStart}
          onChange={onSeekChange}
          onAfterChange={onSeekEnd}
          value={playedSeconds}
          min={0}
          max={duration}
        />
      </SliderWrapper>

      <Info>
        <Duration>{playingTrackAvailable ? currentTime : '--:--'}</Duration>
        <Duration>{playingTrackAvailable ? `-${remaining}` : '--:--'}</Duration>
      </Info>
    </ProgressContainer>
  );
};

ProgressSlider.propTypes = {
  playingTrackAvailable: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  loadedSeconds: PropTypes.number.isRequired,
  playedSeconds: PropTypes.number.isRequired,
  onChangeProgress: PropTypes.func.isRequired,
  onSeekStart: PropTypes.func.isRequired,
  onSeekEnd: PropTypes.func.isRequired,
  onSeekChange: PropTypes.func.isRequired,
};

export default ProgressSlider;
