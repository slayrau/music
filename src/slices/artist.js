import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ArtistApi from 'src/api/artist';
import getCredentials from 'src/utils/helpers/api/get-credentials';
import { normalizeArtist, normalizeAlbum, normalizeTrack } from 'src/utils/helpers/response';

const getArtist = createAsyncThunk('artist/getArtist', async (artistId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await ArtistApi.getArtist(artistId, credentials);
  const normalizedArtist = normalizeArtist(response.data);

  return normalizedArtist;
});

const getArtistAlbums = createAsyncThunk('artist/getArtistAlbums', async (artistId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await ArtistApi.getArtistAlbums(artistId, credentials);
  const { items, limit, offset, total, next } = response.data;
  const normalizedAlbums = items.map(normalizeAlbum);

  return {
    items: normalizedAlbums,
    limit,
    offset,
    total,
    next,
  };
});

const getTopTracks = createAsyncThunk('artist/getTopTracks', async (artistId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await ArtistApi.getTopTracks(artistId, credentials);
  const normalizedTracks = response.data.tracks.map(normalizeTrack);

  return {
    items: normalizedTracks,
  };
});

const getRelatedArtists = createAsyncThunk('artist/getRelatedArtists', async (artistId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await ArtistApi.getRelatedArtists(artistId, credentials);
  const normalizedArtists = response.data.artists.map(normalizeArtist);

  return {
    items: normalizedArtists,
  };
});

const initialState = {
  artist: {
    data: {
      id: '',
      name: '',
      spotifyUrl: '',
      followers: {},
      genres: [],
      images: [],
    },
    loading: true,
    error: null,
  },
  albums: {
    data: {
      items: [],
      limit: 0,
      offset: 0,
      total: 0,
    },
    loading: true,
    error: null,
  },
  topTracks: {
    data: {
      items: [],
    },
    loading: true,
    error: null,
  },
  relatedArtists: {
    data: {
      items: [],
    },
    loading: true,
    error: null,
  },
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: {
    [getArtist.pending]: (state) => {
      state.artist.loading = true;
    },
    [getArtist.fulfilled]: (state, action) => {
      state.artist.data = action.payload;
      state.artist.loading = false;
      state.artist.error = null;
    },
    [getArtist.rejected]: (state, action) => {
      state.artist.error = action.error;
      state.artist.loading = action.false;
    },

    [getArtistAlbums.pending]: (state) => {
      state.albums.loading = true;
    },
    [getArtistAlbums.fulfilled]: (state, action) => {
      state.albums.data = action.payload;
      state.albums.loading = false;
      state.albums.error = false;
    },
    [getArtistAlbums.rejected]: (state, action) => {
      state.albums.error = action.error;
      state.albums.loading = false;
    },

    [getTopTracks.pending]: (state) => {
      state.topTracks.loading = true;
    },
    [getTopTracks.fulfilled]: (state, action) => {
      state.topTracks.data = action.payload;
      state.topTracks.loading = false;
      state.topTracks.error = null;
    },
    [getTopTracks.rejected]: (state, action) => {
      state.topTracks.error = action.error;
      state.topTracks.loading = false;
    },

    [getRelatedArtists.pending]: (state) => {
      state.relatedArtists.loading = true;
    },
    [getRelatedArtists.fulfilled]: (state, action) => {
      state.relatedArtists.data = action.payload;
      state.relatedArtists.loading = false;
      state.relatedArtists.error = null;
    },
    [getRelatedArtists.rejected]: (state, action) => {
      state.relatedArtists.error = action.error;
      state.relatedArtists.loading = false;
    },
  },
});

const selectArtist = (state) => state.artist.artist;
const selectArtistAlbums = (state) => state.artist.albums;
const selectArtistTopTracks = (state) => state.artist.topTracks;
const selectRelatedArtists = (state) => state.artist.relatedArtists;

export {
  getArtist,
  getArtistAlbums,
  getTopTracks,
  getRelatedArtists,
  selectArtist,
  selectArtistAlbums,
  selectArtistTopTracks,
  selectRelatedArtists,
};
export default artistSlice.reducer;
