import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactSlice, { filterReducer } from './contacts/reducers';
import authSlice from './auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts: contactSlice,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  });

export const persistor = persistStore(store);
