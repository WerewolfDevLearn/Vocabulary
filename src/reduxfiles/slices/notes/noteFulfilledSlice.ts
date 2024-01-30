import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import { noteCreate } from "reduxfiles/operations/notes/noteOps";

import { INotesState } from "reduxfiles/reduxTypes";
import storage from "redux-persist/lib/storage";

const initialState: INotesState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(noteCreate.fulfilled, (state, { payload }) => {
      state.notes.push(payload);
    });
  },
});
const persistNotesConfig = {
  key: "notes",
  storage,
  whitelist: ["notes"],
};
export const notesReducer = noteSlice.reducer;
export const persistedNotesReducer = persistReducer(
  persistNotesConfig,
  notesReducer,
);
