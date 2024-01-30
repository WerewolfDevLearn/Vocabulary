import { createAsyncThunk } from "@reduxjs/toolkit";
import { NoteType } from "services/serviceTypes";
import { createNoteFetch } from "services/api/notes";

import { RootState } from "reduxfiles/store";

export const noteCreate = createAsyncThunk<
  NoteType,
  FormData,
  { rejectValue: string; state: RootState }
>("note/Create", async function (noteData, { rejectWithValue, getState }) {
  try {
    const state = getState() as RootState;
    const stateToken = state.user.token;
    if (!stateToken) return rejectWithValue("Please register or login!");

    const response = await createNoteFetch({
      note: noteData,
      token: stateToken,
    });
    return response;
  } catch (error: unknown) {
    const finalError = error as Error;
    return rejectWithValue(finalError.message);
  }
});
