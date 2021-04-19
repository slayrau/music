import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAudioPlayer, setPlaying, setPlayingTrack } from 'src/slices/audio-player';

const useAudio = () => {
  const audioRef = useRef();
  const { playing, playingTrack, tracks } = useSelector(selectAudioPlayer);
  const dispatch = useDispatch();

  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const [loadedSeconds, setLoadedSeconds] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);

  const playingTrackIndex = tracks.findIndex((track) => track.id === playingTrack.id);
  const playingTrackAvailable = !!playingTrack.previewUrl;
  const prevTrack = tracks[playingTrackIndex - 1];
  const nextTrack = tracks[playingTrackIndex + 1];
  const prevTrackExist = !!prevTrack;
  const nextTrackExist = !!nextTrack;

  const handleDuration = (value) => {
    setDuration(value);
  };

  const handleProgress = (progress) => {
    if (!seeking) {
      setLoadedSeconds(progress.loadedSeconds);
      setPlayedSeconds(progress.playedSeconds);
    }
  };

  const handleEnded = () => {
    if (nextTrackExist) {
      dispatch(setPlayingTrack(nextTrack));
    } else {
      dispatch(setPlaying(false));
    }
  };

  const handlePlay = () => {
    dispatch(setPlaying(!playing));
  };

  const handleBackward = () => {
    if (prevTrackExist) {
      dispatch(setPlayingTrack(prevTrack));
    }
  };

  const handleForward = () => {
    if (nextTrackExist) {
      dispatch(setPlayingTrack(nextTrack));
    }
  };

  const handleSeekStart = () => {
    setSeeking(true);
  };

  const handleChangeSeek = (value) => {
    setPlayedSeconds(value);
  };

  const handleSeekEnd = (value) => {
    audioRef.current.seekTo(value);
    setSeeking(false);
  };

  const handleChangeSliderProgress = (value) => {
    audioRef.current.seekTo(value);
  };

  const handleTrackListItemButtonClick = (id) => {
    const clickedTrack = tracks.find((track) => track.id === id);

    if (id !== playingTrack.id) {
      dispatch(setPlayingTrack(clickedTrack));
      dispatch(setPlaying(true));
    }

    if (id === playingTrack.id) {
      dispatch(setPlaying(!playing));
    }
  };

  return {
    audioRef,

    playing,
    duration,
    loadedSeconds,
    playedSeconds,

    playingTrack,
    tracks,
    playingTrackAvailable,
    prevTrackExist,
    nextTrackExist,

    handleDuration,
    handleProgress,
    handleEnded,
    handlePlay,
    handleBackward,
    handleForward,

    handleSeekStart,
    handleSeekEnd,
    handleChangeSeek,
    handleChangeSliderProgress,

    handleTrackListItemButtonClick,
  };
};

export default useAudio;
