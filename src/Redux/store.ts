import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appSlice } from './slices/appSlice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
