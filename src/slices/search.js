import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import SearchApi from 'src/api/search';

import { ResponseDataType } from 'src/utils/constants';
import { QuerySearchTypeToResponseDataType } from 'src/utils/helpers';

const getSearch = createAsyncThunk('search/getSearch', async ({ queryTerm, queryType }, thunkApi) => {
  const { tokenType, accessToken } = thunkApi.getState().auth;
  const response = await SearchApi.getSearch({ queryTerm, queryType, tokenType, accessToken });
  const responseType = QuerySearchTypeToResponseDataType[queryType];
  const data = responseType ? response.data[responseType] : response.data;

  return { data, responseType };
});

const loadMore = createAsyncThunk('search/loadMore', async ({ queryTerm, queryType, queryOffset }, thunkApi) => {
  const { tokenType, accessToken } = thunkApi.getState().auth;
  const response = await SearchApi.getSearch({ queryTerm, queryType, queryOffset, tokenType, accessToken });
  const responseType = QuerySearchTypeToResponseDataType[queryType];
  const data = responseType ? response.data[responseType] : response.data;

  return { data, responseType };
});

const initialState = {
  queryTerm: '',
  queryType: '',
  loading: false,
  error: null,
  data: {
    [ResponseDataType.artists]: {
      items: [],
      offset: null,
      total: null,
    },
    [ResponseDataType.albums]: {
      items: [],
      offset: null,
      total: null,
    },
    [ResponseDataType.tracks]: {
      items: [],
      offset: null,
      total: null,
    },
    [ResponseDataType.playlists]: {
      items: [],
      offset: null,
      total: null,
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
export const selectSearchArtists = (state) => state.search.data[ResponseDataType.artists];
export const selectSearchAlbums = (state) => state.search.data[ResponseDataType.albums];
export const selectSearchTracks = (state) => state.search.data[ResponseDataType.tracks];
export const selectSearchPlaylists = (state) => state.search.data[ResponseDataType.playlists];
export { getSearch, loadMore };
export const { setQueryTerm, setQueryType, resetSearchData, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
