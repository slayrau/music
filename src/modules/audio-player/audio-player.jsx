import { useEffect, useRef, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import FocusLock from 'react-focus-lock';
import ReactPlayer from 'react-player';

import { useMediaContext } from 'src/contexts/media';
import { useOnOutsideClick, useOnKeypress } from 'src/hooks';

import { IconType } from 'src/utils/constants';
import { getHighResImage, getLowResImage } from 'src/utils/helpers/common';

import Icon from 'src/components/icon';
import Poster from 'src/components/poster';

import useAudio from './hooks/use-audio';

import MiniPlayer from './components/mini-player';
import ProgressSlider from './components/progress-slider';
import PlaybackControl from './components/playback-control';
import TrackList from './components/track-list';
import Tabs from './components/tabs';

import {
  ModalRow,
  AudioPlayerContainer,
  ModalPlayerControlsWrapper,
  ModalInfoContainer,
  PlayerModal,
  ModalHeader,
  ModalPosterWrapper,
  ModalContent,
  TrackName,
  CloseModalButton,
  ProgressSliderWrapper,
  ArtistsList,
  ArtistItem,
  Artist,
  TrackListWrapper,
  ModalFooter,
} from './style';

const Tab = {
  player: {
    id: 'player',
    name: 'Player',
    icon: IconType.musicBeamNote,
  },
  tracklist: {
    id: 'tracklist',
    name: 'Track List',
    icon: IconType.musicList,
  },
};

const AudioPlayer = () => {
  const isLargeMedia = useMediaContext();
  const [activeTab, setActiveTab] = useState(Tab.player.id);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();

  const {
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
  } = useAudio();

  useOnOutsideClick(modalRef, () => {
    setModalOpen(false);
  });

  useOnKeypress('Escape', () => {
    if (modalOpen) {
      setModalOpen(false);
    }
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveTab(Tab.player.id);
  };

  useEffect(() => {
    const modal = modalRef.current;

    if (modalOpen && !isLargeMedia) {
      disableBodyScroll(modal);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [modalRef, modalOpen, isLargeMedia, activeTab]);

  return (
    <AudioPlayerContainer>
      <ReactPlayer
        ref={audioRef}
        url={playingTrack.previewUrl}
        playing={playing}
        progressInterval={1000}
        width={0}
        height={0}
        config={{
          file: { forceAudio: true },
        }}
        onDuration={handleDuration}
        onProgress={handleProgress}
        onEnded={handleEnded}
      />

      <MiniPlayer
        playing={playing}
        playingTrackId={playingTrack.id}
        playingTrackAvailable={playingTrackAvailable}
        nextTrackExist={nextTrackExist}
        image={getLowResImage(playingTrack.images)}
        trackName={playingTrack.name}
        onOpenModal={handleOpenModal}
        onPlay={handlePlay}
        onForward={handleForward}
      />

      {modalOpen && (
        <FocusLock>
          <PlayerModal ref={modalRef} isLargeMedia={isLargeMedia}>
            <ModalHeader>
              <CloseModalButton onClick={handleCloseModal} type="button">
                <Icon icon={IconType.xmark} />
              </CloseModalButton>
            </ModalHeader>

            <ModalContent>
              {activeTab === Tab.player.id && (
                <ModalPlayerControlsWrapper>
                  <ModalPosterWrapper>
                    <Poster src={getHighResImage(playingTrack.images)} placeholderType="track" />
                  </ModalPosterWrapper>

                  <ModalInfoContainer>
                    <ModalRow>
                      <TrackName>{playingTrack.name}</TrackName>

                      <ArtistsList>
                        {playingTrack.artists.map((artist) => (
                          <ArtistItem key={artist.id}>
                            <Artist
                              as={Link}
                              onClick={handleCloseModal}
                              to={`/artist/${artist.id}`}
                            >
                              {artist.name}
                            </Artist>
                          </ArtistItem>
                        ))}
                      </ArtistsList>
                    </ModalRow>

                    <ModalRow>
                      <ProgressSliderWrapper>
                        <ProgressSlider
                          playingTrackAvailable={playingTrackAvailable}
                          duration={duration}
                          loadedSeconds={loadedSeconds}
                          playedSeconds={playedSeconds}
                          onChangeProgress={handleChangeSliderProgress}
                          onSeekStart={handleSeekStart}
                          onSeekEnd={handleSeekEnd}
                          onSeekChange={handleChangeSeek}
                        />
                      </ProgressSliderWrapper>

                      <PlaybackControl
                        playing={playing}
                        playingTrackId={playingTrack.id}
                        playingTrackAvailable={playingTrackAvailable}
                        prevTrackExist={prevTrackExist}
                        nextTrackExist={nextTrackExist}
                        onPlay={handlePlay}
                        onBackward={handleBackward}
                        onForward={handleForward}
                      />
                    </ModalRow>
                  </ModalInfoContainer>
                </ModalPlayerControlsWrapper>
              )}

              {activeTab === Tab.tracklist.id && (
                <TrackListWrapper>
                  <TrackList
                    playingTrackAvailable={playingTrackAvailable}
                    playingTrackId={playingTrack.id}
                    playing={playing}
                    tracks={tracks}
                    onTrackClick={handleTrackListItemButtonClick}
                  />
                </TrackListWrapper>
              )}
            </ModalContent>

            <ModalFooter>
              <Tabs
                tabs={Object.values(Tab)}
                activeTab={activeTab}
                onTabClick={(event) => setActiveTab(event.target.id)}
              />
            </ModalFooter>
          </PlayerModal>
        </FocusLock>
      )}
    </AudioPlayerContainer>
  );
};

export default memo(AudioPlayer);
