import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playing: false,
  playingTrack: {
    id: null,
    uri: null,
    name: 'Not Playing',
    artists: [],
    images: [],
    durationMs: 0,
    previewUrl: '',
    albumName: '',
    albumId: '',
  },
  tracks: [],
};

const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setPlayingTrack: (state, action) => {
      state.playingTrack = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
  },
  extraReducers: {},
});

const selectAudioPlayer = (state) => state.audioPlayer;

export { selectAudioPlayer };
export const { setTracks, setPlaying, setPlayingTrack, backward, forward } = audioPlayerSlice.actions;
export default audioPlayerSlice.reducer;
