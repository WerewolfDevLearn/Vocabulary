import { authDataType } from "./serviceTypes";

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

const requestObjects = {
	auth: authRequestObject,
	logOut: logOutRequestObject,
	getCurrentUser: getCurrentRequestObdject,
};

export default requestObjects;
