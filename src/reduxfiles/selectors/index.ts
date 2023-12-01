import { useSelector } from "react-redux";
import { RootState } from "reduxfiles/store";

export function useToken() {
	return useSelector((state: RootState) => state.user.token);
}
export function useisLoading() {
	return useSelector((state: RootState) => state.isLoading);
}

export function useIsRefreshing() {
	return useSelector((state: RootState) => state.isRefreshing);
}

export function useError() {
	return useSelector((state: RootState) => state.error);
}

export function useUser() {
	return useSelector((state: RootState) => state.user);
}

export function useAvatar() {
	return useSelector((state: RootState) => state.user.avatarUrl);
}

export function useUserName() {
	return useSelector((state: RootState) => state.user.name);
}

export function useUserEmail() {
	return useSelector((state: RootState) => state.user.email);
}
export function useUserPhone() {
	return useSelector((state: RootState) => state.user.phone);
}

export function useProfileIsLoadingAvatar() {
	return useSelector((state: RootState) => state.profileUpdLoading.avatarUpd);
}
export function useProfileIsLoadingName() {
	return useSelector((state: RootState) => state.profileUpdLoading.nameUpd);
}
export function useProfileIsLoadingPhone() {
	return useSelector((state: RootState) => state.profileUpdLoading.phoneUpd);
}
export function useProfileIsLoadingEmail() {
	return useSelector((state: RootState) => state.profileUpdLoading.emailUpd);
}
