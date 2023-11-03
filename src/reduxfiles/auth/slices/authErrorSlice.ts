import { createSlice } from "@reduxjs/toolkit";
import { userAuth, userLogOut, getCurrentUser } from "../authOps";

const initialState = "";

const errorSlice = createSlice({
	name: "error",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(userAuth.rejected, (_, { payload }) => payload)
			.addCase(userLogOut.rejected, (_, { payload }) => payload)
			.addCase(getCurrentUser.rejected, (_, { payload }) => payload)
			.addCase(userAuth.pending, () => initialState)
			.addCase(userLogOut.pending, () => initialState)
			.addCase(getCurrentUser.pending, () => initialState);
	},
});

export const errorReducer = errorSlice.reducer;
