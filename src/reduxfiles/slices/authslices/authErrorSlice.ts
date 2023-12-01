import { createSlice } from "@reduxjs/toolkit";
import { userAuth, userLogOut, getCurrentUser } from "../../operations/auth/authOps";
import { avatarUpdate, nameUpdate, emailUpdate, phoneUpdate } from "reduxfiles/operations/profileUpd/profileUpdOps";

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
			.addCase(avatarUpdate.rejected, (_, { payload }) => payload)
			.addCase(nameUpdate.rejected, (_, { payload }) => payload)
			.addCase(emailUpdate.rejected, (_, { payload }) => payload)
			.addCase(phoneUpdate.rejected, (_, { payload }) => payload)

			.addCase(userAuth.pending, () => initialState)
			.addCase(userLogOut.pending, () => initialState)
			.addCase(getCurrentUser.pending, () => initialState)
			.addCase(avatarUpdate.pending, () => initialState)
			.addCase(nameUpdate.pending, () => initialState)
			.addCase(emailUpdate.pending, () => initialState)
			.addCase(phoneUpdate.pending, () => initialState);
	},
});

export const errorReducer = errorSlice.reducer;
