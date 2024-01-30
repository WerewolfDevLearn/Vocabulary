import { createAsyncThunk } from "@reduxjs/toolkit";

import { authDataType, AuthPayloadType } from "services/serviceTypes";
import { authFetch, logOutFetch, getCurrent } from "services/api/auth";

import { RootState } from "reduxfiles/store";

export const userAuth = createAsyncThunk<
  AuthPayloadType,
  authDataType,
  { rejectValue: string }
>("user/Auth", async function (authData, { rejectWithValue }) {
  try {
    const response = await authFetch(authData);
    return response;
  } catch (error: unknown) {
    const finalError = error as Error;
    return rejectWithValue(finalError.message);
  }
});
export const userLogOut = createAsyncThunk<
  unknown,
  unknown,
  { rejectValue: string }
>("user/LogOut", async function (_, { rejectWithValue }) {
  try {
    const response = await logOutFetch();
    return response;
  } catch (error: unknown) {
    const finalError = error as Error;
    return rejectWithValue(finalError.message);
  }
});

export const getCurrentUser = createAsyncThunk<
  AuthPayloadType,
  undefined,
  { rejectValue: string; state: RootState }
>("user/GetCurrent", async function (_, { rejectWithValue, getState }) {
  try {
    const state = getState() as RootState;
    const stateToken = state.user.token;
    if (!stateToken) return rejectWithValue("Please register or login!");
    const response = await getCurrent(stateToken);
    return response;
  } catch (error: unknown) {
    const finalError = error as Error;
    return rejectWithValue(finalError.message);
  }
});
