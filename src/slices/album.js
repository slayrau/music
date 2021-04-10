import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import AlbumApi from 'src/api/album';

const getAlbum = createAsyncThunk('album/getAlbum', async (albumId, thunkApi) => {
  const { tokenType, accessToken } = thunkApi.getState().auth;
  const response = await AlbumApi.getAlbum({ albumId, tokenType, accessToken });
  const { id, uri, type, name, label, release_date, total_tracks, artists, images, copyrights, tracks: { items }, external_urls: { spotify } } = response.data;

  return {
    id,
    uri,
    type,
    name,
    label,
    releaseDate: release_date,
    totalTracks: total_tracks,
    spotifyUrl: spotify,
    artists,
    image: images[0].url,
    copyrights,
    tracks: items,
  };
});

const initialState = {
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
    image: {},
    copyrights: [],
    tracks: [],
  },
  loading: true,
  error: null,
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  extraReducers: {
    [getAlbum.pending]: (state) => {
      state.loading = true;
    },
    [getAlbum.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getAlbum.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

const selectAlbum = (state) => state.album;

export { getAlbum, selectAlbum };
export default albumSlice.reducer;
