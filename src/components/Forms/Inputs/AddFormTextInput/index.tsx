import { useState } from "react";
import { inputValidation } from "utilities/inputValidation";

import FromError from "components/Forms/FromError";
import DeleteButton from "components/UIControl/DeleteButton";

import {
  AddFormFieldWrapper,
  AddFormInputLabel,
  AddFormInputWrapper,
} from "components/Forms/FormsBasicStyles.styled";

import { AddFormInputText } from "./AddFormInput.styled";
import { IAddFormInput } from "./AddFormInputType";

export default function AddFormInput({
  name,
  placeholder,
  idx,
  callBack,
  callBackFunction,
}: IAddFormInput) {
  const initialState = "";
  const [error, setError] = useState<string>("");
  const [value, setValue] = useState<string>(initialState);
  const [touched, setTouched] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const error = inputValidation(event.currentTarget.value, {
      min: {
        value: 3,
        erorr: "value must be bigger then 3",
      },
    });
    setValue(event.currentTarget.value.trim());
    if (event.currentTarget.value === initialState) {
      setTouched(false);
      setError("");
    } else {
      setTouched(true);
      setError(error);
    }
  };

  return (
    <AddFormFieldWrapper>
      {callBack && (
        <DeleteButton callBackFunction={callBackFunction} idx={idx} />
      )}
      <AddFormInputLabel htmlFor={name}>{name}</AddFormInputLabel>
      <AddFormInputWrapper $valid={!error} $isTouched={!touched}>
        <AddFormInputText
          data-valid={!error}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </AddFormInputWrapper>
      <FromError string={error} />
    </AddFormFieldWrapper>
  );
}
