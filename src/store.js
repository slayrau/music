import { configureStore } from '@reduxjs/toolkit';

import auth from 'src/slices/auth';
import review from 'src/slices/review';

export default configureStore({
  reducer: {
    auth,
    review,
  },
});
