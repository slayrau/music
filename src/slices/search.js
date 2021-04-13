import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import SearchApi from 'src/api/search';

import getCredentials from 'src/utils/helpers/api/get-credentials';
import { QueryType } from 'src/utils/constants';
import { QueryTypeToSearchDataType } from 'src/utils/helpers/common';
import { normalizeArtist, normalizeAlbum, normalizeTrack, normalizePlaylist } from 'src/utils/helpers/response';

const QueryTypeToNormalizer = {
  [QueryType.artist]: normalizeArtist,
  [QueryType.album]: normalizeAlbum,
  [QueryType.track]: normalizeTrack,
  [QueryType.playlist]: normalizePlaylist,
};

const normalizeSearchData = (data, queryType) => {
  const responseType = QueryTypeToSearchDataType[queryType];

  if (!responseType) {
    const { artists, albums, tracks, playlists } = data;

    const normalizedArtists = {
      items: artists.items.map(normalizeArtist),
      offset: artists.offset,
      limit: artists.limit,
      next: artists.next,
    };

    const normalizedAlbums = {
      items: albums.items.map(normalizeAlbum),
      offset: albums.offset,
      limit: albums.limit,
      next: albums.next,
    };

    const normalizedTracks = {
      items: tracks.items.map(normalizeTrack),
      offset: tracks.offset,
      limit: tracks.limit,
      next: albums.next,
    };

    const normalizedPlaylists = {
      items: playlists.items.map(normalizePlaylist),
      offset: playlists.offset,
      limit: playlists.limit,
      next: playlists.next,
    };

    return {
      responseType,
      data: {
        artists: normalizedArtists,
        albums: normalizedAlbums,
        tracks: normalizedTracks,
        playlists: normalizedPlaylists,
      },
    };
  }

  const normalizer = QueryTypeToNormalizer[queryType];
  const typedData = data[responseType];

  return {
    responseType,
    data: {
      items: typedData.items.map(normalizer),
      limit: typedData.limit,
      offset: typedData.offset,
      next: typedData.next,
    },
  };
};

const getSearch = createAsyncThunk('search/getSearch', async ({ queryTerm, queryType }, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await SearchApi.getSearch({ queryTerm, queryType }, credentials);
  const normalizedData = normalizeSearchData(response.data, queryType);

  return normalizedData;
});

const loadMore = createAsyncThunk('search/loadMore', async ({ queryOffset }, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const { queryTerm, queryType } = thunkApi.getState().search;
  const response = await SearchApi.getSearch({ queryTerm, queryType, queryOffset }, credentials);
  const normalizedData = normalizeSearchData(response.data, queryType);

  return normalizedData;
});

const initialState = {
  queryTerm: '',
  queryType: '',
  loading: false,
  error: null,
  data: {
    artists: {
      items: [],
      offset: null,
      total: null,
      next: null,
    },
    albums: {
      items: [],
      offset: null,
      total: null,
      next: null,
    },
    tracks: {
      items: [],
      offset: null,
      total: null,
      next: null,
    },
    playlists: {
      items: [],
      offset: null,
      total: null,
      next: null,
    },
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQueryTerm: (state, action) => {
      state.queryTerm = action.payload;
    },
    setQueryType: (state, action) => {
      state.queryType = action.payload;
    },
    resetSearchData: (state) => {
      state.data = initialState.data;
    },
    resetSearch: () => initialState,
  },
  extraReducers: {
    [getSearch.pending]: (state) => {
      state.loading = true;
    },
    [getSearch.fulfilled]: (state, action) => {
      const { data, responseType } = action.payload;

      if (responseType) {
        state.data[responseType] = data;
      } else {
        state.data = data;
      }

      state.loading = false;
      state.error = null;
    },
    [getSearch.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [loadMore.pending]: (state) => {
      state.loading = true;
    },
    [loadMore.fulfilled]: (state, action) => {
      const { data, responseType } = action.payload;
      const nextItems = [...state.data[responseType].items, ...data.items];

      state.data[responseType] = data;
      state.data[responseType].items = nextItems;
      state.loading = false;
      state.error = null;
    },
    [loadMore.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export const selectSearch = (state) => state.search;
export const selectSearchArtists = (state) => state.search.data.artists;
export const selectSearchAlbums = (state) => state.search.data.albums;
export const selectSearchTracks = (state) => state.search.data.tracks;
export const selectSearchPlaylists = (state) => state.search.data.playlists;
export { getSearch, loadMore };
export const { setQueryTerm, setQueryType, resetSearchData, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
