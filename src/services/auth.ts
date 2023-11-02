import { authDataType } from "./serviceTypes";
import errorCatch from "./errorCath";
import requestObjects from "./requestObjcts";
const baseURL = "http://localhost:3001";

export async function authFetch(authData: authDataType) {
	const response = await fetch(`${baseURL}/auth/user`, requestObjects.auth(authData));
	const data = await errorCatch(response);
	return data;
}
export async function logOutFetch() {
	const response = await fetch(`${baseURL}/auth/logout`, requestObjects.logOut());
	const data = await errorCatch(response);
	return data;
}
