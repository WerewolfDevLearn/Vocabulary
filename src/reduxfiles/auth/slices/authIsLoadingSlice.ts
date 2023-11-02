import { createSlice } from "@reduxjs/toolkit";
import { userAuth, userLogOut } from "../authOps";

const initialState = false;

const isLoadingSlice = createSlice({
	name: "isLoading",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(userAuth.pending, () => true)
			.addCase(userLogOut.pending, () => true)

			.addCase(userAuth.fulfilled, () => false)
			.addCase(userLogOut.fulfilled, () => false)

			.addCase(userAuth.rejected, () => false)
			.addCase(userLogOut.rejected, () => false);
	},
});

export const isLoadingReducer = isLoadingSlice.reducer;
