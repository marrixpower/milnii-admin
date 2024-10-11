import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  authReducer,
  usersReducer,
  bussinessVendoreReducer,
  categoriesReducer,
} from 'features/index';
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
import storage from 'redux-persist/lib/storage';

const persistedAuthReducer = {
  key: 'auth-milni-admin',
  storage,
};

const rootReducer = combineReducers({
  authState: persistReducer(persistedAuthReducer, authReducer),
  usersState: usersReducer,
  vendoreState: bussinessVendoreReducer,
  categoriesState: categoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
