import { configureStore } from '@reduxjs/toolkit';

import auth from 'src/slices/auth';
import review from 'src/slices/review';
import search from 'src/slices/search';
import album from 'src/slices/album';
import artist from 'src/slices/artist';

export default configureStore({
  reducer: {
    auth,
    review,
    album,
    search,
    artist,
  },
});
