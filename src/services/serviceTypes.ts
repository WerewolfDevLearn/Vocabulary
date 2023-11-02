export type authDataType = {
	type: "Login" | "Register";
	name?: string;
	email: string;
	password: string;
};

export type AuthPayload = {
	id: string;
	token: string;
	email: string;
	name: string;
	avatarURL: string;
};
