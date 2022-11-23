import { configureStore } from '@reduxjs/toolkit';
//imported the reducer to store.js
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';
import logger from 'redux-logger';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
      campsites: campsitesReducer,
      comments: commentsReducer,
      partners: partnersReducer,
      promotions: promotionsReducer,
      //Add the userReducer to the set of reducers that are passed to configureStore(), with the key of user
      user: userReducer
  },
  //For its property, pass an arrow function with a parameter of getDefaultMiddleware, which is a function.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
