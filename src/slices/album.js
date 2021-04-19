import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import AlbumApi from 'src/api/album';
import getCredentials from 'src/utils/helpers/api/get-credentials';
import { normalizeAlbum, normalizeTrack } from 'src/utils/helpers/response';

const getAlbum = createAsyncThunk('album/getAlbum', async (albumId, thunkApi) => {
  const credentials = getCredentials(thunkApi);
  const response = await AlbumApi.getAlbum(albumId, credentials);

  const album = normalizeAlbum(response.data);
  const tracks = response.data.tracks.items.map((track) => ({
    ...normalizeTrack(track),
    albumId: album.id,
    albumName: album.name,
    images: album.images,
  }));

  return {
    album,
    tracks,
  };
});

const initialState = {
  data: {
    album: {
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
      state.loading = false;
    },
  },
});

const selectAlbum = (state) => state.album;

export { getAlbum, selectAlbum };
export default albumSlice.reducer;
