import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ReviewApi from 'src/api/review';

const getNewReleases = createAsyncThunk('review/getNewReleases', async (_, thunkApi) => {
  const { tokenType, accessToken } = thunkApi.getState().auth;
  const response = await ReviewApi.getNewReleases({ tokenType, accessToken });
  const { items, total } = response.data.albums;

  return { items, total };
});

const getFeaturedPlaylists = createAsyncThunk('review/getFeaturedPlaylists', async (_, thunkApi) => {
  const { tokenType, accessToken } = thunkApi.getState().auth;
  const response = await ReviewApi.getFeaturedPlaylists({ tokenType, accessToken });
  const { message, playlists: { items, total } } = response.data;

  return { message, items, total };
});

const initialState = {
  newReleases: {
    items: [],
    total: 0,
    loading: true,
    error: null,
  },

  featuredPlaylists: {
    message: '',
    items: [],
    total: 0,
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
      state.newReleases.items = action.payload.items;
      state.newReleases.total = action.payload.total;
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
      state.featuredPlaylists.message = action.payload.message;
      state.featuredPlaylists.items = action.payload.items;
      state.featuredPlaylists.total = action.payload.total;
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
