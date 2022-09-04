import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { itemsSlice } from './contacts';
import { contactsApi } from './contacts';
import { authApi } from './auth-createApi';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth-slice';
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

// ================ STORE===============
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, itemsSlice.reducer);

//=====================================

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    auth: authPersistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
