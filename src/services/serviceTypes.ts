export type authDataType = {
	type: "Login" | "Register";
	name?: string;
	email: string;
	password: string;
};

export type UpdAvatarDataType = {
	token: string;
	file: FormData;
};
export type UpdNameDataType = {
	token: string;
	name: string;
};
export type UpdEmailDataType = {
	token: string;
	email: string;
};
export type UpdPhoneDataType = {
	token: string;
	phone: string;
};

export type AvatarUpdFile = FormData;

export type AuthPayloadType = {
	id: string;
	token: string;
	name: string;
	email: string;
	phone: string;
	avatarUrl: string;
};
export type UpdAvataPayloadType = {
	avatarUrl: string;
};
export type UpdNamePayloadType = {
	name: string;
};
export type UpdEmailPayloadType = {
	email: string;
};
export type UpdPhonePayloadType = {
	phone: string;
};
