import { FormStyles, FormLabel, FormInput, FormInputContainer, FormHeading, SubmitButton } from "./Form.styled";
import { IFormInput, IForm } from "./FormTypes";

import { useForm, SubmitHandler } from "react-hook-form";

export default function Form({ formName }: IForm) {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

	return (
		<FormStyles onSubmit={handleSubmit(onSubmit)}>
			<FormHeading>{formName}</FormHeading>
			{formName === "Register" && (
				<>
					<FormLabel>name</FormLabel>
					<FormInputContainer>
						<FormInput {...register("name")} placeholder='Name' type='text' />
					</FormInputContainer>
				</>
			)}
			<FormLabel>e-mail</FormLabel>
			<FormInputContainer>
				<FormInput {...register("e-mail")} placeholder='E-mail' type='email' />
			</FormInputContainer>
			<FormLabel>password</FormLabel>
			<FormInputContainer>
				<FormInput {...register("password")} placeholder='Password' type='password' />
			</FormInputContainer>
			<SubmitButton type='submit'>{formName}</SubmitButton>
		</FormStyles>
	);
}
