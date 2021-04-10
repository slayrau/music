import { configureStore } from '@reduxjs/toolkit';

import auth from 'src/slices/auth';
import review from 'src/slices/review';
import album from 'src/slices/album';

export default configureStore({
  reducer: {
    auth,
    review,
    album,
  },
});
