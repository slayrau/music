import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import AlbumApi from 'src/api/album';
import getCredentials from 'src/utils/helpers/api/get-credentials';
import { normalizeAlbum, normalizeTrack } from 'src/utils/helpers/response';

const getAlbum = createAsyncThunk('album/getAlbum', async (albumId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await AlbumApi.getAlbum(albumId, credentials);

  return normalizeAlbum(response.data);
});

const getAlbumTracks = createAsyncThunk('album/getAlbumTracks', async (albumId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await AlbumApi.getAlbumTracks(albumId, credentials);

  return {
    items: response.data.items.map(normalizeTrack),
  };
});

const initialState = {
  album: {
    data: {
      id: '',
      uri: '',
      type: '',
      name: '',
      label: '',
      releaseDate: '',
      totalTracks: 0,
      spotifyUrl: '',
      artists: [],
      images: [],
      copyrights: [],
    },
    loading: true,
    error: null,
  },
  tracks: {
    data: {
      items: [],
    },
    loading: true,
    error: null,
  },
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  extraReducers: {
    [getAlbum.pending]: (state) => {
      state.album.loading = true;
    },
    [getAlbum.fulfilled]: (state, action) => {
      state.album.data = action.payload;
      state.album.loading = false;
      state.album.error = null;
    },
    [getAlbum.rejected]: (state, action) => {
      state.album.error = action.error;
      state.album.loading = false;
    },

    [getAlbumTracks.pending]: (state) => {
      state.tracks.loading = true;
    },
    [getAlbumTracks.fulfilled]: (state, action) => {
      state.tracks.data = action.payload;
      state.tracks.loading = false;
      state.tracks.error = null;
    },
    [getAlbumTracks.rejected]: (state, action) => {
      state.tracks.error = action.error;
      state.tracks.loading = false;
    },
  },
});

const selectAlbum = (state) => state.album.album;
const selectAlbumTracks = (state) => state.album.tracks;

export { getAlbum, getAlbumTracks, selectAlbum, selectAlbumTracks };
export default albumSlice.reducer;
