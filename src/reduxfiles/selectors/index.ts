import { useSelector } from "react-redux";
import { RootState } from "reduxfiles/store";

import { IUserState } from "reduxfiles/reduxTypes";

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
	const user = useSelector<RootState>(state => state.user);
	return user as IUserState;
}

// export function useVerifiedEmail() {
// 	return useSelector<RootState>(state => state.user);
// }
// export function useisRefreshing() {
// 	return useSelector<RootState>(state => state.isRefreshing);
// }
