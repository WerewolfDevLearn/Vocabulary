import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserPhone } from "reduxfiles/selectors";
import { FieldTypePhone } from "./UserProlifeFieldTypes";
import { phoneFieldSchema } from "./validationSchemas";
import { useAppDispatch } from "reduxfiles/store";
import { phoneUpdate } from "reduxfiles/operations/profileUpd/profileUpdOps";
import { UserProlifeInputForm, UserProlifeInput, InputSwitch } from "./UserProlifeField.styled";
import { ErrorElement } from "components/Forms/AuthForm/Form.styled";

export function UserProfilePhoneForm() {
	const userPhone = useUserPhone();
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
	} = useForm<FieldTypePhone>({
		resolver: yupResolver(phoneFieldSchema),
		defaultValues: {
			phone: `${userPhone}`,
		},
	});

	const onSubmit: SubmitHandler<FieldTypePhone> = data => {
		console.log("data: ", data);
		dispatch(phoneUpdate(data));
	};

	return (
		<div>
			<UserProlifeInputForm onSubmit={handleSubmit(onSubmit)}>
				<UserProlifeInput type='text' disabled={disabled} {...register("phone")} />
				<InputSwitch onClick={switchText} type={buttonType}>
					{buttonText}
				</InputSwitch>
			</UserProlifeInputForm>
			{errors.phone?.message && <ErrorElement>{errors.phone?.message}</ErrorElement>}
		</div>
	);
}
