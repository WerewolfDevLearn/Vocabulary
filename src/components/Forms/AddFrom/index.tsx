import { useState } from "react";
import { useAppDispatch } from "reduxfiles/store";
import { noteCreate } from "reduxfiles/operations/notes/noteOps";
import objToJSX from "utilities/objToJSX";

import AddFormTools from "../AddFormTools";

import {
  AddFromContainer,
  AddFormBackground,
  AddForm,
  AddFromSubmitButton,
  InnerBackground,
  FiledsWrapper,
} from "./AddFrom.styled";

import { AddFormState } from "./AddFormTypes";

const initialState = [
  {
    type: "textInput",
    key: "id1",
    name: "Tag",
    placeholder: "Add tag",
    callBack: false,
    callBackFunction: null,
  },
  {
    type: "textInput",
    key: "id2",
    name: "Term",
    placeholder: "Add term",
    callBack: false,
    callBackFunction: null,
  },
  {
    type: "textAria",
    key: "id3",
    name: "Definition",
    placeholder: "Add definition",
    callBack: false,
    callBackFunction: null,
  },
];

export default function AddFrom() {
  const [arrOfElements, setArrOfElements] =
    useState<AddFormState>(initialState);
  const dispatch = useAppDispatch();

  const removeElement = (id: string) => {
    setArrOfElements((arrOfElements) =>
      arrOfElements.filter(({ key }) => key !== id),
    );
  };

  const onSubimtForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(`${name}:`, value);
    });
    // dispatch(noteCreate(formData));
  };

  return (
    <AddFromContainer>
      <AddFormBackground>
        <AddFormTools
          addElement={setArrOfElements}
          callBackFunction={removeElement}
        />
        <AddForm onSubmit={onSubimtForm}>
          <FiledsWrapper>
            {arrOfElements.map((elem) => objToJSX(elem, removeElement))}
          </FiledsWrapper>
          <AddFromSubmitButton>
            <InnerBackground>ADD Term</InnerBackground>
          </AddFromSubmitButton>
        </AddForm>
      </AddFormBackground>
    </AddFromContainer>
  );
}
