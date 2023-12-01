import * as yup from "yup";

export const textFieldSchema = yup.object().shape({
	name: yup.string().min(2).required(),
});
export const emailFieldSchema = yup.object().shape({
	email: yup.string().email().required(),
});
export const phoneFieldSchema = yup.object().shape({
	phone: yup.string().min(7).required(),
});
export const passwordFieldSchema = yup.object().shape({
	password: yup.string().min(4).required(),
});
