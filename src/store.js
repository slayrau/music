import { configureStore } from '@reduxjs/toolkit';

import auth from 'src/slices/auth';

export default configureStore({
  reducer: {
    auth,
  },
});
