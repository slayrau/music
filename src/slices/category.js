import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CategoryApi from 'src/api/category';
import getCredentials from 'src/utils/helpers/api/get-credentials';
import { normalizePlaylist } from 'src/utils/helpers/response';

const getCategory = createAsyncThunk('category/getCategory', async (categoryId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await CategoryApi.getCategory(categoryId, credentials);

  return response.data.playlists.items.map(normalizePlaylist);
});

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    resetCategory: () => initialState,
  },
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.loading = true;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    [getCategory.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

const selectCategory = (state) => state.category;

export { getCategory, selectCategory };
export const { resetCategory } = categorySlice.actions;
export default categorySlice.reducer;
