import { useState } from "react";
import { useForm } from "react-hook-form";

import { useUserEmail, useProfileIsLoadingEmail } from "reduxfiles/selectors";
import { useAppDispatch } from "reduxfiles/store";
import { emailUpdate } from "reduxfiles/operations/profileUpd/profileUpdOps";

import { FieldTypeEmail } from "./UserProlifeFieldTypes";

import Loader from "components/Loader/Loader";
import FormError from "components/Forms/FromError";

import { UserProlifeInput, InputSwitch, UserProlifeInputFrom } from "./UserProlifeField.styled";

export function UserProfileFieldEmail() {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [buttonText, setButtonText] = useState<"Ok" | "Edit">("Edit");
  const userEmail = useUserEmail();
  const isLoading = useProfileIsLoadingEmail();
  const dispatch = useAppDispatch();

  const form = useForm<FieldTypeEmail>({
    shouldUseNativeValidation: false,
    defaultValues: {
      email: userEmail,
    },
  });

  const { register, handleSubmit, formState } = form;
  const { ref, name, onBlur, onChange } = register("email", {
    required: "This is required.",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "invalid email address",
    },
    minLength: {
      value: 10,
      message: `Name must be longer than 10 symbols`,
    },
  });
  const { errors, isValid } = formState;

  const switchText = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.innerText === "Edit") {
      setButtonText("Ok");
      setDisabled(false);
    }
    if (e.currentTarget.innerText === "Ok") {
      setButtonText("Edit");
      setDisabled(true);
    }
  };

  const onSubmit = (data: FieldTypeEmail) => {
    if (data.email === userEmail) return;
    if (data.email === "") return;

    dispatch(emailUpdate(data));
  };

  return (
    <div>
      <UserProlifeInputFrom
        onSubmit={handleSubmit(onSubmit)}
        $isvalid={isValid}
        disabled={disabled}
        noValidate
      >
        {isLoading ? (
          <Loader />
        ) : (
          <UserProlifeInput
            type="email"
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            $isvalid={isValid}
            aria-invalid={errors.email ? "true" : "false"}
          />
        )}
        <InputSwitch onClick={switchText}>{buttonText}</InputSwitch>
      </UserProlifeInputFrom>
      <FormError string={errors.email?.message} />
    </div>
  );
}
