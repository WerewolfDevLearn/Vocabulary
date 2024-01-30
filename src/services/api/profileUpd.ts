import {
  UpdAvatarDataType,
  UpdNameDataType,
  UpdEmailDataType,
  UpdPhoneDataType,
} from "../serviceTypes";
import errorCatch from "./errorCath";
import requestObjects from "./userRequestObjcts";
const baseURL = "http://localhost:3001";

export async function profileAvatarUpd(userData: UpdAvatarDataType) {
  const response = await fetch(
    `${baseURL}/auth/profile/avatar`,
    requestObjects.avatarUpdate(userData),
  );
  const data = await errorCatch(response);
  return data;
}
export async function profileNameUpd(userData: UpdNameDataType) {
  const response = await fetch(
    `${baseURL}/auth/profile/name`,
    requestObjects.nameUpdate(userData),
  );
  const data = await errorCatch(response);
  return data;
}
export async function profileEmailUpd(userData: UpdEmailDataType) {
  const response = await fetch(
    `${baseURL}/auth/profile/email`,
    requestObjects.emailUpdate(userData),
  );
  const data = await errorCatch(response);
  return data;
}
export async function profilePhoneUpd(userData: UpdPhoneDataType) {
  const response = await fetch(
    `${baseURL}/auth/profile/phone`,
    requestObjects.phoneUpdate(userData),
  );
  const data = await errorCatch(response);
  return data;
}
