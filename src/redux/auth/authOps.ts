import { createAsyncThunk } from "@reduxjs/toolkit";
import { authDataType, AuthPayload } from "../../services/serviceTypes";
import { authFetch, logOutFetch } from "../../services/auth";

export const userAuth = createAsyncThunk<
	AuthPayload,
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
export const userLogOut = createAsyncThunk<unknown, unknown, { rejectValue: string }>(
	"user/LogOut",
	async function (_, { rejectWithValue }) {
		try {
			const response = await logOutFetch();
			return response;
		} catch (error: unknown) {
			const finalError = error as Error;
			return rejectWithValue(finalError.message);
		}
	}
);
// export const logOut = createAsyncThunk<undefined, undefined, { rejectValue: string }>(
// 	"user/LogOut",
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const response = await userLogOut();
// 			token.unset();
// 			return response;
// 		} catch (error: unknown) {
// 			if (axios.isAxiosError<{ error: { message: string } }>(error)) {
// 				const errorAxios = error as AxiosError;
// 				return rejectWithValue(errorAxios.message);
// 			}
// 			console.error(error);
// 		}
// 	}
// );
// export const getCurrent = createAsyncThunk<
// 	IOCurrentUser,
// 	undefined,
// 	{ rejectValue: string }
// >("user/GetCurrent", async (_, { rejectWithValue, getState }) => {
// 	try {
// 		const state = getState() as RootState;
// 		const stateToken = state.user.token;
// 		if (!stateToken) return rejectWithValue("Please register or login!");
// 		const credentials = await getCurrentUser(stateToken);
// 		return credentials;
// 	} catch (error: unknown) {
// 		if (axios.isAxiosError<{ error: { message: string } }>(error)) {
// 			const errorAxios = error as AxiosError;
// 			return rejectWithValue(errorAxios.message);
// 		}
// 		console.error(error);
// 	}
// });
