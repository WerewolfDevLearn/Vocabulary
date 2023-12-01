import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  AvatarUpdFile,
  UpdAvataPayloadType,
  UpdNamePayloadType,
  UpdEmailPayloadType,
  UpdPhonePayloadType,
} from "services/serviceTypes";

import {
  FieldTypeEmail,
  FieldTypeName,
  FieldTypePhone,
} from "components/Forms/UserProlifeFields/UserProlifeFieldTypes";

import {
  profileAvatarUpd,
  profileNameUpd,
  profileEmailUpd,
  profilePhoneUpd,
} from "services/api/profileUpd";
import { RootState } from "reduxfiles/store";

export const avatarUpdate = createAsyncThunk<
  UpdAvataPayloadType,
  AvatarUpdFile,
  { rejectValue: string; state: RootState }
>("profile/AvatarUpd", async function (file, { rejectWithValue, getState }) {
  try {
    const state = getState() as RootState;
    const stateToken = state.user.token;
    const response = await profileAvatarUpd({ token: stateToken, file });
    return response;
  } catch (error) {
    const finalError = error as Error;
    return rejectWithValue(finalError.message);
  }
});
export const nameUpdate = createAsyncThunk<
  UpdNamePayloadType,
  FieldTypeName,
  { rejectValue: string; state: RootState }
>("profile/NameUpd", async function ({ name }, { rejectWithValue, getState }) {
  try {
    const state = getState() as RootState;
    const stateToken = state.user.token;
    const response = await profileNameUpd({ token: stateToken, name });
    return response;
  } catch (error) {
    const finalError = error as Error;
    return rejectWithValue(finalError.message);
  }
});
export const emailUpdate = createAsyncThunk<
  UpdEmailPayloadType,
  FieldTypeEmail,
  { rejectValue: string; state: RootState }
>("profile/EmailUpd", async function ({ email }, { rejectWithValue, getState }) {
  try {
    const state = getState() as RootState;
    const stateToken = state.user.token;
    const response = await profileEmailUpd({ token: stateToken, email });
    return response;
  } catch (error) {
    const finalError = error as Error;
    return rejectWithValue(finalError.message);
  }
});
export const phoneUpdate = createAsyncThunk<
  UpdPhonePayloadType,
  FieldTypePhone,
  { rejectValue: string; state: RootState }
>("profile/PhoneUpd", async function ({ phone }, { rejectWithValue, getState }) {
  try {
    const state = getState() as RootState;
    const stateToken = state.user.token;
    const response = await profilePhoneUpd({ token: stateToken, phone });
    return response;
  } catch (error) {
    const finalError = error as Error;
    return rejectWithValue(finalError.message);
  }
});
