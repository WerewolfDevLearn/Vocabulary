import { useState } from "react";
import { useForm } from "react-hook-form";

import { useUserPhone, useProfileIsLoadingPhone } from "reduxfiles/selectors";
import { useAppDispatch } from "reduxfiles/store";
import { phoneUpdate } from "reduxfiles/operations/profileUpd/profileUpdOps";

import { FieldTypePhone } from "./UserProlifeFieldTypes";

import Loader from "components/Loader/Loader";
import FormError from "components/Forms/FromError";

import { UserProlifeInput, InputSwitch, UserProlifeInputFrom } from "./UserProlifeField.styled";

export function UserProfileFieldPhone() {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [buttonText, setButtonText] = useState<"Ok" | "Edit">("Edit");
  const userPhone = useUserPhone();
  const isLoading = useProfileIsLoadingPhone();
  const dispatch = useAppDispatch();

  const form = useForm<FieldTypePhone>({
    shouldUseNativeValidation: false,
    defaultValues: {
      phone: userPhone,
    },
  });

  const { register, handleSubmit, formState } = form;
  const { ref, name, onBlur, onChange } = register("phone", {
    required: "This is required.",
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
      message: "invalid phone numer.",
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

  const onSubmit = (data: FieldTypePhone) => {
    if (data.phone === userPhone) return;
    if (data.phone === "") return;

    dispatch(phoneUpdate(data));
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
            type="tel"
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            $isvalid={isValid}
            aria-invalid={errors.phone ? "true" : "false"}
          />
        )}
        <InputSwitch onClick={switchText}>{buttonText}</InputSwitch>
      </UserProlifeInputFrom>

      <FormError string={errors.phone?.message} />
    </div>
  );
}
