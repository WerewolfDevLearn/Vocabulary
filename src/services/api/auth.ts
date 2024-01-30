import { authDataType } from "../serviceTypes";
import errorCatch from "./errorCath";
import userRequestObjcts from "./userRequestObjcts";
const baseURL = "http://localhost:3001";

export async function authFetch(authData: authDataType) {
  const response = await fetch(
    `${baseURL}/auth/user`,
    userRequestObjcts.auth(authData),
  );
  const data = await errorCatch(response);
  return data;
}
export async function logOutFetch() {
  const response = await fetch(
    `${baseURL}/auth/logout`,
    userRequestObjcts.logOut(),
  );
  const data = await errorCatch(response);
  return data;
}
export async function getCurrent(token: string) {
  const response = await fetch(
    `${baseURL}/auth/current`,
    userRequestObjcts.getCurrentUser(token),
  );
  const data = await errorCatch(response);
  return data;
}
