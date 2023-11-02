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

const requestObjects = {
	auth: authRequestObject,
	logOut: logOutRequestObject,
};

export default requestObjects;
