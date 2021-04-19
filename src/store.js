import { configureStore } from '@reduxjs/toolkit';

import auth from 'src/slices/auth';
import review from 'src/slices/review';
import search from 'src/slices/search';
import album from 'src/slices/album';
import artist from 'src/slices/artist';
import playlist from 'src/slices/playlist';
import audioPlayer from 'src/slices/audio-player';

export default configureStore({
  reducer: {
    auth,
    review,
    album,
    search,
    artist,
    playlist,
    audioPlayer,
  },
});
