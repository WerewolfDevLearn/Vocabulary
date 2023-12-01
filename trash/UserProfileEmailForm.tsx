import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserEmail } from "reduxfiles/selectors";
import { FieldTypeEmail } from "./UserProlifeFieldTypes";
import { emailFieldSchema } from "./validationSchemas";
import { useAppDispatch } from "reduxfiles/store";
import { emailUpdate } from "reduxfiles/operations/profileUpd/profileUpdOps";
import { UserProlifeInputForm, UserProlifeInput, InputSwitch } from "./UserProlifeField.styled";
import { ErrorElement } from "components/Forms/AuthForm/Form.styled";

export function UserProfileEmailForm() {
	const userEmail = useUserEmail();
	const dispatch = useAppDispatch();

	const [disabled, setDisabled] = useState<boolean>(true);
	const [buttonText, setButtonText] = useState<"Ok" | "Edit">("Edit");
	const [buttonType, setButtonType] = useState<"button" | "submit">("button");

	const switchText = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (e.currentTarget.innerText === "Edit") {
			setButtonText("Ok");
			setButtonType("submit");
			setDisabled(false);
		}
		if (e.currentTarget.innerText === "Ok") {
			setButtonText("Edit");
			setButtonType("button");
			setDisabled(true);
		}
	};

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FieldTypeEmail>({
		resolver: yupResolver(emailFieldSchema),
		defaultValues: {
			email: `${userEmail}`,
		},
	});

	const onSubmit: SubmitHandler<FieldTypeEmail> = data => {
		dispatch(emailUpdate(data));
	};

	return (
		<div>
			<UserProlifeInputForm onSubmit={handleSubmit(onSubmit)}>
				<UserProlifeInput type='email' disabled={disabled} {...register("email")} />
				<InputSwitch onClick={switchText} type={buttonType}>
					{buttonText}
				</InputSwitch>
			</UserProlifeInputForm>
			{errors.email?.message && <ErrorElement>{errors.email?.message}</ErrorElement>}
		</div>
	);
}
