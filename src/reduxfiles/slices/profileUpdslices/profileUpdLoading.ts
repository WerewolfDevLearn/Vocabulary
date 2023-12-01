import { createSlice } from "@reduxjs/toolkit";
import { avatarUpdate, nameUpdate, emailUpdate, phoneUpdate } from "reduxfiles/operations/profileUpd/profileUpdOps";

const initialState = {
	avatarUpd: false,
	nameUpd: false,
	emailUpd: false,
	phoneUpd: false,
};

const profileUpdSlice = createSlice({
	name: "profileUpdLoading",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(avatarUpdate.pending, (state, _) => {
				state.avatarUpd = true;
			})
			.addCase(nameUpdate.pending, (state, _) => {
				state.nameUpd = true;
			})
			.addCase(emailUpdate.pending, (state, _) => {
				state.emailUpd = true;
			})
			.addCase(phoneUpdate.pending, (state, _) => {
				state.phoneUpd = true;
			})
			.addCase(avatarUpdate.fulfilled, (state, _) => {
				state.avatarUpd = false;
			})
			.addCase(nameUpdate.fulfilled, (state, _) => {
				state.nameUpd = false;
			})
			.addCase(emailUpdate.fulfilled, (state, _) => {
				state.emailUpd = false;
			})
			.addCase(phoneUpdate.fulfilled, (state, _) => {
				state.phoneUpd = false;
			})
			.addCase(avatarUpdate.rejected, (state, _) => {
				state.avatarUpd = false;
			})
			.addCase(nameUpdate.rejected, (state, _) => {
				state.nameUpd = false;
			})
			.addCase(emailUpdate.rejected, (state, _) => {
				state.emailUpd = false;
			})
			.addCase(phoneUpdate.rejected, (state, _) => {
				state.phoneUpd = false;
			});
	},
});

export const profileUpdReducer = profileUpdSlice.reducer;
