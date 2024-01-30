import {
  UpdAvatarDataType,
  UpdNameDataType,
  UpdEmailDataType,
  UpdPhoneDataType,
  authDataType,
} from "../serviceTypes";

function authRequestObject(data: authDataType): RequestInit {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
}
function logOutRequestObject(): RequestInit {
  return {
    method: "POST",
    body: "",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

function getCurrentRequestObdject(token: string): RequestInit {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

function avatarUpdateObject(userData: UpdAvatarDataType): RequestInit {
  return {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
    body: userData.file,
  };
}
function nameObject(userData: UpdNameDataType): RequestInit {
  return {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({ name: userData.name }),
  };
}
function emailObject(userData: UpdEmailDataType): RequestInit {
  return {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({ email: userData.email }),
  };
}
function phoneObject(userData: UpdPhoneDataType): RequestInit {
  return {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({ phone: userData.phone }),
  };
}

const userRequestObjects = {
  auth: authRequestObject,
  logOut: logOutRequestObject,
  getCurrentUser: getCurrentRequestObdject,
  avatarUpdate: avatarUpdateObject,
  nameUpdate: nameObject,
  emailUpdate: emailObject,
  phoneUpdate: phoneObject,
};

export default userRequestObjects;
