import * as yup from "yup";
export const registerSchema = yup
	.object()
	.shape({
		name: yup.string().min(2),
		email: yup.string().email().required(),
		password: yup.string().min(4).required(),
	})
	.required();
export const loginSchema = yup
	.object()
	.shape({
		email: yup.string().email().required(),
		password: yup.string().min(4).required(),
	})
	.required();
