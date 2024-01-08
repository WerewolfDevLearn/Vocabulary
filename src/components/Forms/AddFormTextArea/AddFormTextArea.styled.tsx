import styled from "styled-components";

export const AddFormTextAreaElem = styled.textarea.attrs({
  rows: 5,
  cols: 20,
  wrap: "hard",
})`
  font-size: var(--font-size-regular);
  display: block;
  height: fit-content;
  width: 100%;
  line-height: 1;
  padding-block: 4px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  overflow-x: hidden;
  overflow-y: auto;
  &::placeholder {
    opacity: 0.5;
  }
`;
