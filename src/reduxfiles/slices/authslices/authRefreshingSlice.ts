import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../operations/auth/authOps";

const initialState = false;

const isRefreshingSlice = createSlice({
	name: "isRefreshing",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getCurrentUser.pending, () => true)
			.addCase(getCurrentUser.fulfilled, () => false)
			.addCase(getCurrentUser.rejected, () => false);
	},
});

export const isRefreshingReducer = isRefreshingSlice.reducer;
