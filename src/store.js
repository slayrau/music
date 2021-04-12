import { configureStore } from '@reduxjs/toolkit';

import auth from 'src/slices/auth';
import review from 'src/slices/review';
import album from 'src/slices/album';
import search from 'src/slices/search';

export default configureStore({
  reducer: {
    auth,
    review,
    album,
    search,
  },
});
