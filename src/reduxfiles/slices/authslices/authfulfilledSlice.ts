import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import {
  userAuth,
  userLogOut,
  getCurrentUser,
} from "reduxfiles/operations/auth/authOps";
import {
  avatarUpdate,
  nameUpdate,
  emailUpdate,
  phoneUpdate,
} from "reduxfiles/operations/profileUpd/profileUpdOps";

import { IUserState } from "reduxfiles/reduxTypes";
import storage from "redux-persist/lib/storage";

const initialState: IUserState = {
  id: "",
  token: "",
  name: "",
  email: "",
  phone: "",
  avatarUrl: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userAuth.fulfilled, (_, { payload }) => payload)
      .addCase(getCurrentUser.fulfilled, (_, { payload }) => payload)
      .addCase(getCurrentUser.rejected, () => initialState)
      .addCase(userLogOut.fulfilled, () => initialState)
      .addCase(avatarUpdate.fulfilled, (state, { payload }) => {
        state.avatarUrl = payload.avatarUrl;
      })
      .addCase(nameUpdate.fulfilled, (state, { payload }) => {
        state.name = payload.name;
      })
      .addCase(emailUpdate.fulfilled, (state, { payload }) => {
        state.email = payload.email;
      })

      .addCase(phoneUpdate.fulfilled, (state, { payload }) => {
        state.phone = payload.phone;
      });
  },
});

const persistUserConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

export const userReducer = userSlice.reducer;
export const persistedUserReducer = persistReducer(
  persistUserConfig,
  userReducer,
);
