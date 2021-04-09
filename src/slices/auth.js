import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import AuthApi from 'src/api/auth';

const authorize = createAsyncThunk('auth/authorize', async () => {
  const response = await AuthApi.authorize();

  return response.data;
});

const initialState = {
  accessToken: null,
  expiresIn: null,
  tokenType: null,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authorize.pending]: (state) => {
      state.loading = true;
    },

    [authorize.fulfilled]: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.expiresIn = action.payload.expires_in;
      state.tokenType = action.payload.token_type;
      state.loading = false;
      state.error = null;
    },

    [authorize.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

const selectAuth = (state) => state.auth;

export { authorize, selectAuth };
export default authSlice.reducer;
