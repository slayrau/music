import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ReviewApi from 'src/api/review';
import getCredentials from 'src/utils/helpers/api/get-credentials';
import { normalizeAlbum, normalizePlaylist } from 'src/utils/helpers/response';

const getNewReleases = createAsyncThunk('review/getNewReleases', async (_, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await ReviewApi.getNewReleases(credentials);
  const { albums } = response.data;

  return {
    items: albums.items.map(normalizeAlbum),
  };
});

const getFeaturedPlaylists = createAsyncThunk('review/getFeaturedPlaylists', async (_, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await ReviewApi.getFeaturedPlaylists(credentials);
  const { message, playlists } = response.data;

  return {
    items: playlists.items.map(normalizePlaylist),
    message,
  };
});

const initialState = {
  newReleases: {
    data: {
      items: [],
    },
    loading: true,
    error: null,
  },

  featuredPlaylists: {
    data: {
      message: '',
      items: [],
    },
    loading: true,
    error: null,
  },
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  extraReducers: {
    [getNewReleases.pending]: (state) => {
      state.newReleases.loading = true;
    },
    [getNewReleases.fulfilled]: (state, action) => {
      state.newReleases.data = action.payload;
      state.newReleases.loading = false;
      state.newReleases.error = null;
    },
    [getNewReleases.rejected]: (state, action) => {
      state.newReleases.error = action.error;
      state.newReleases.loading = false;
    },

    [getFeaturedPlaylists.pending]: (state) => {
      state.featuredPlaylists.loading = true;
    },
    [getFeaturedPlaylists.fulfilled]: (state, action) => {
      state.featuredPlaylists.data = action.payload;
      state.featuredPlaylists.loading = false;
      state.featuredPlaylists.error = null;
    },
    [getNewReleases.rejected]: (state, action) => {
      state.featuredPlaylists.error = action.error;
      state.featuredPlaylists.loading = false;
    },
  },
});

const selectNewReleases = (state) => state.review.newReleases;
const selectFeaturedPlaylists = (state) => state.review.featuredPlaylists;

export { getNewReleases, getFeaturedPlaylists, selectNewReleases, selectFeaturedPlaylists };
export default reviewSlice.reducer;
