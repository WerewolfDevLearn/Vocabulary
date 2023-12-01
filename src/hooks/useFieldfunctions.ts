import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useFieldFunctions(type: "text" | "email" | "password") {
	if (type === "text") {
		const {
			register,
			formState: { errors },
			handleSubmit,
		} = useForm<FieldTypeName>({ resolver: yupResolver(textFieldSchema) });

		const onSubmit: SubmitHandler<FieldTypeName> = data => {
			console.log("data", data);
		};
		return [register, errors, handleSubmit, onSubmit];
	}
	if (type === "email") {
		const {
			register,
			formState: { errors },
			handleSubmit,
		} = useForm<FieldTypeEmail>({ resolver: yupResolver(emailFieldSchema) });

		const onSubmit: SubmitHandler<FieldTypeEmail> = data => {
			console.log("data", data);
		};
		return [register, errors, handleSubmit, onSubmit];
	}
	if (type === "password") {
		const {
			register,
			formState: { errors },
			handleSubmit,
		} = useForm<FieldTypePassword>({ resolver: yupResolver(passwordFieldSchema) });

		const onSubmit: SubmitHandler<FieldTypeEmail> = data => {
			console.log("data", data);
		};
		return [register, errors, handleSubmit, onSubmit];
	}
}

export type useFieldFunctionsType = ReturnType<typeof useFieldFunctions>;
