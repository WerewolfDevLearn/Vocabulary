import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
/*User*/
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistedUserReducer } from "./slices/authslices/authfulfilledSlice";
import { isRefreshingReducer } from "./slices/authslices/authRefreshingSlice";
import { errorReducer } from "./slices/authslices/authErrorSlice";
import { isLoadingReducer } from "./slices/authslices/authIsLoadingSlice";
import { profileUpdReducer } from "./slices/profileUpdslices/profileUpdLoading";
/*Notes */
import { persistedNotesReducer } from "./slices/notes/noteFulfilledSlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    error: errorReducer,
    isLoading: isLoadingReducer,
    isRefreshing: isRefreshingReducer,
    profileUpdLoading: profileUpdReducer,
    notes: persistedNotesReducer,
  },
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
