import styled from "styled-components";

export const AddFromContainer = styled.div`
  width: calc(100% / 2);
  border: 4px solid var(--accent-color);
  border-radius: 16px 8px;
  padding: 4px;
  margin-bottom: 25px;
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background-color: var(--transperent-bg);
  border-top-left-radius: 12px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 12px;
`;

export const AddFormFieldWrapper = styled.div``;

export const AddFormInputLabel = styled.label`
  font-size: var(--font-size-small);
`;

export const AddFormInputText = styled.input.attrs({
  type: "text",
})`
  font-size: var(--font-size-regular);
  display: block;
  width: 100%;
  line-height: 1;
  padding-inline: 20px;
  padding-block: 4px;
`;
export const AddFormTextArea = styled.textarea`
  font-size: var(--font-size-regular);
  display: block;
  width: 100%;

  line-height: 1;
  height: 100px;
  padding-inline: 20px;
  padding-block: 4px;
`;

export const AddFormImageInput = styled.input.attrs({
  type: "file",
  accept: "image/*,.png,.jpg,.gif,.web",
})``;

export const AddFormInputWrapper = styled.div`
  width: 100%;
  border: 2px solid var(--accent-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 10px;
  padding-inline: 20px;
  padding-block: 4px;
  background-color: var(--transperent-green-color);
`;
