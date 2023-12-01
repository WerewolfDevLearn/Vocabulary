import { useState } from "react";
import { useForm } from "react-hook-form";

import { useUserName, useProfileIsLoadingName } from "reduxfiles/selectors";
import { useAppDispatch } from "reduxfiles/store";
import { nameUpdate } from "reduxfiles/operations/profileUpd/profileUpdOps";

import { FieldTypeName } from "./UserProlifeFieldTypes";

import Loader from "components/Loader/Loader";
import FormError from "components/Forms/FromError";

import { UserProlifeInput, InputSwitch, UserProlifeInputFrom } from "./UserProlifeField.styled";

export function UserProfileFieldName() {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [buttonText, setButtonText] = useState<"Ok" | "Edit">("Edit");
  const userName = useUserName();
  const isLoading = useProfileIsLoadingName();
  const dispatch = useAppDispatch();

  const form = useForm<FieldTypeName>({
    shouldUseNativeValidation: false,
    defaultValues: {
      name: userName,
    },
  });

  const { register, handleSubmit, formState } = form;
  const { ref, name, onBlur, onChange } = register("name", {
    required: "This is required.",
    minLength: {
      value: 3,
      message: `Name must be longer than 3 symbols`,
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

  const onSubmit = (data: FieldTypeName) => {
    if (data.name === userName) return;
    if (data.name === "") return;

    dispatch(nameUpdate(data));
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
            type="text"
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            $isvalid={isValid}
            aria-invalid={errors.name ? "true" : "false"}
          />
        )}
        <InputSwitch onClick={switchText}>{buttonText}</InputSwitch>
      </UserProlifeInputFrom>
      <FormError string={errors.name?.message} />
    </div>
  );
}
