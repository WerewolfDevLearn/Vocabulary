import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useToken() {
	return useSelector<RootState>(state => state.user.token);
}
export function useisLoading() {
	return useSelector<RootState>(state => state.isLoading);
}

export function useError() {
	return useSelector<RootState>(state => state.error);
}
export function useUser() {
	return useSelector<RootState>(state => state.user);
}

// export function useVerifiedEmail() {
// 	return useSelector<RootState>(state => state.user);
// }
// export function useisRefreshing() {
// 	return useSelector<RootState>(state => state.isRefreshing);
// }
