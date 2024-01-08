import DragNDropImgInput from "../AddFromImgInput/DragNDropImgInput";
import AddFormInput from "../AddFormInput";
import AddFormTextArea from "../AddFormTextArea";

import {
  AddFromContainer,
  AddForm,
  AddFromSubmitButton,
  InnerBackground,
} from "./AddFrom.styled";

export default function AddFrom() {
  const onSubimtForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(`${name}:`, value);
    });
  };

  return (
    <AddFromContainer>
      <AddForm onSubmit={onSubimtForm}>
        <AddFormInput name="Tag" placeholder="Add tag" />
        <AddFormInput name="Term" placeholder="Add term" />
        <AddFormTextArea name="Definition" placeholder="Add definition" />
        <DragNDropImgInput />
        <AddFromSubmitButton>
          <InnerBackground>ADD Term</InnerBackground>
        </AddFromSubmitButton>
      </AddForm>
    </AddFromContainer>
  );
}
