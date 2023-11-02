import { createSlice } from "@reduxjs/toolkit";
import { userAuth, userLogOut } from "../authOps";
import { IUserState } from "../../reduxTypes";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: IUserState = {
	id: "",
	token: "",
	email: "",
	name: "",
	avatarURL: "",
};

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(userAuth.fulfilled, (_, { payload }) => payload)
			.addCase(userLogOut.fulfilled, () => initialState);
	},
});

const persistUserConfig = {
	key: "token",
	storage,
	whitelist: ["token"],
};

export const userReducer = userSlice.reducer;
export const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
