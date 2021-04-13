import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import PlaylistApi from 'src/api/playlist';

import getCredentials from 'src/utils/helpers/api/get-credentials';
import { normalizePlaylist, normalizeTrack } from 'src/utils/helpers/response';

const getPlaylist = createAsyncThunk('playlist/getPlaylist', async (playlistId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await PlaylistApi.getPlaylist(playlistId, credentials);

  return {
    data: normalizePlaylist(response.data),
    tracks: response.data.tracks.items.map(({ track }) => normalizeTrack(track)),
  };
});

const initialState = {
  data: {
    id: '',
    uri: '',
    name: '',
    description: '',
    spotifyUrl: '',
    images: [],
  },
  tracks: [],
  loading: true,
  error: null,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {},
  extraReducers: {
    [getPlaylist.pending]: (state) => {
      state.loading = true;
    },
    [getPlaylist.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.tracks = action.payload.tracks;
      state.loading = false;
      state.error = null;
    },
    [getPlaylist.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

const selectPlaylist = (state) => state.playlist;

export { getPlaylist, selectPlaylist };
export default playlistSlice.reducer;
