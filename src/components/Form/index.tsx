import {
	FormStyles,
	FormLabel,
	FormInput,
	FormInputContainer,
	FormHeading,
	ErrorElement,
	SubmitButton,
} from "./Form.styled";
//Types
import { IFormInput, IForm } from "./FormTypes";
import { useAppDispatch } from "reduxfiles/store";
import { authDataType } from "../../services/serviceTypes";
//Libraries
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, loginSchema } from "./validationSchemas";

import { userAuth } from "reduxfiles/auth/authOps";

export default function Form({ formName }: IForm) {
	const schema = formName === "Register" ? registerSchema : loginSchema;
	const dispatch = useAppDispatch();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInput>({ resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<IFormInput> = data => {
		const authData: authDataType =
			formName === "Register"
				? { type: "Register", ...data }
				: { type: "Login", email: data.email, password: data.password };
		dispatch(userAuth(authData));
	};

	return (
		<FormStyles onSubmit={handleSubmit(onSubmit)}>
			<FormHeading>{formName}</FormHeading>
			{formName === "Register" && (
				<>
					<FormLabel>name</FormLabel>
					<FormInputContainer>
						<FormInput {...register("name")} placeholder='Name' type='text' key='Name' />
						{errors.name?.message && <ErrorElement>{errors.name?.message}</ErrorElement>}
					</FormInputContainer>
				</>
			)}
			<FormLabel>e-mail</FormLabel>
			<FormInputContainer>
				<FormInput {...register("email")} placeholder='E-mail' type='email' key='Email' />
				{errors.email?.message && <ErrorElement>{errors.email?.message}</ErrorElement>}
			</FormInputContainer>
			<FormLabel>password</FormLabel>
			<FormInputContainer>
				<FormInput
					{...register("password")}
					placeholder='Password'
					type='password'
					key='Password'
				/>
				{errors.password?.message && (
					<ErrorElement>{errors.password?.message}</ErrorElement>
				)}
			</FormInputContainer>
			<SubmitButton type='submit'>{formName}</SubmitButton>
		</FormStyles>
	);
}
