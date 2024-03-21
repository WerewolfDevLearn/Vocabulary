import { useState } from "react";

import FromError from "components/Forms/FromError";
import DeleteButton from "components/UIControl/DeleteButton";

import { inputValidation } from "utilities/inputValidation";

import { IAddFormTextArea } from "./AddFormTextAreaTypes";

import { AddFormTextAreaElem } from "./AddFormTextArea.styled";

import {
  AddFormFieldWrapper,
  AddFormInputLabel,
  AddFormInputWrapper,
} from "components/Forms/FormsBasicStyles.styled";

export default function AddFormTextArea({
  name,
  placeholder,
  idx,
  callBack,
  callBackFunction,
}: IAddFormTextArea) {
  const initialState = "";
  const [error, setError] = useState<string>("");
  const [value, setValue] = useState<string>(initialState);
  const [touched, setTouched] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <AddFormTextAreaElem
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
