import { useState } from "react";
import { useAppDispatch } from "reduxfiles/store";
import { noteCreate } from "reduxfiles/operations/notes/noteOps";

import DragNDropImgInput from "../Inputs/AddFromImgInput/DragNDropImgInput/";
import AddFormInput from "../Inputs/AddFormTextInput";
import AddFormTextArea from "../Inputs/AddFormTextArea";

import {
  AddFromContainer,
  AddForm,
  AddFromSubmitButton,
  InnerBackground,
} from "./AddFrom.styled";

export default function AddFrom() {
  const [arrOfElements, setArrOfElements] = useState([
    <AddFormInput name="Tag" placeholder="Add tag" />,
    <AddFormInput name="Term" placeholder="Add term" />,
    <AddFormTextArea name="Definition" placeholder="Add definition" />,
  ]);
  const dispatch = useAppDispatch();

  const onSubimtForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(`${name}:`, value);
    });
    dispatch(noteCreate(formData));
  };

  return (
    <AddFromContainer>
      <AddForm onSubmit={onSubimtForm}>
        <AddFormInput name="Tag" placeholder="Add tag" />
        <AddFormInput name="Term" placeholder="Add term" />
        <AddFormTextArea name="Definition" placeholder="Add definition" />
        <DragNDropImgInput key="4" />
        <AddFormTextArea
          name="Definition1"
          placeholder="Add definition"
          key="2"
        />
        <DragNDropImgInput
          key="5
        "
        />
        <AddFormTextArea
          name="Definition2"
          placeholder="Add definition"
          key="3"
        />
        <AddFromSubmitButton>
          <InnerBackground>ADD Term</InnerBackground>
        </AddFromSubmitButton>
      </AddForm>
    </AddFromContainer>
  );
}
