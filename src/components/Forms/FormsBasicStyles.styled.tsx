import styled from "styled-components";

export const AddFormFieldWrapper = styled.div`
  position: relative;
`;

export const AddFormInputLabel = styled.label`
  font-size: var(--font-size-small);
  margin-left: 20px;
`;
export const AddFormInputWrapper = styled.div<{
  $valid: boolean;
  $isTouched: boolean;
}>`
  width: 100%;
  border-color: ${(props) => {
    return props.$isTouched
      ? `var(--accent-color)`
      : props.$valid
      ? "var(--green-color)"
      : "var(--error-color)";
  }};
  border-width: 2px;
  border-style: solid;
  border-top-left-radius: 35px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 35px;
  padding-inline: 20px;
  padding-block: 4px;
  background-color: var(--transperent-green-color);
`;
