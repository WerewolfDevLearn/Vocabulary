import styled from "styled-components";

export const AddFormInputText = styled.input.attrs({
  type: "text",
})`
  font-size: var(--font-size-regular);
  display: block;
  width: 100%;
  line-height: 1;

  padding-block: 4px;
  &::placeholder {
    opacity: 0.5;
  }
`;
