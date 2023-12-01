import { useForm, SubmitHandler } from "react-hook-form";

import FromError from "components/Forms/FromError";
import DragNDropImgInput from "../DragNDropImgInput";

import {
  AddFromContainer,
  AddForm,
  AddFormInputText,
  AddFormTextArea,
  AddFormImageInput,
  AddFormFieldWrapper,
  AddFormInputWrapper,
  AddFormInputLabel,
} from "./AddFrom.styled";

export default function AddFrom() {
  return (
    <AddFromContainer>
      <AddForm>
        <AddFormFieldWrapper>
          <AddFormInputLabel htmlFor="tag">Tag</AddFormInputLabel>
          <AddFormInputWrapper>
            <AddFormInputText id="tag" />
          </AddFormInputWrapper>
          <FromError string="Error" />
        </AddFormFieldWrapper>
        <AddFormFieldWrapper>
          <AddFormInputLabel htmlFor="term">Term</AddFormInputLabel>
          <AddFormInputWrapper>
            <AddFormInputText id="term" />
          </AddFormInputWrapper>
          <FromError string="Error" />
        </AddFormFieldWrapper>
        <AddFormFieldWrapper>
          <AddFormInputLabel htmlFor="definitions">Definitions</AddFormInputLabel>
          <AddFormInputWrapper>
            <AddFormTextArea id="definitions" />
          </AddFormInputWrapper>
          <FromError string="Error" />
        </AddFormFieldWrapper>
        <DragNDropImgInput />
      </AddForm>
    </AddFromContainer>
  );
}
