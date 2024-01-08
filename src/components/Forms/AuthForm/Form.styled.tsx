import styled from "styled-components";

export const FormStyles = styled.form`
  width: 575px;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 10px;
  border: 4px solid var(--accent-color);
  background-color: var(--transperent-bg);
  box-shadow:
    15px 15px 150px 2px rgba(112, 98, 63, 0.2),
    -15px -15px 150px 2px rgba(112, 98, 63, 0.2),
    -15px 15px 150px 2px rgba(112, 98, 63, 0.2),
    15px -15px 150px 2px rgba(112, 98, 63, 0.2),
    inset 15px 15px 400px 2px #50aba01f;
  margin-bottom: 5px;
  margin-inline: auto;
`;

export const FormHeading = styled.h2`
  font-size: var(--heading-font-size);
  text-align: center;
`;

export const FormLabel = styled.label`
  font-size: var(--font-size-small);
  text-transform: uppercase;
`;

export const FormInputContainer = styled.div`
  border: 2px solid var(--low-accent-color);
  background-color: var(--main-bg-color);
  padding: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 10px;
  transition: border-color 250ms;
  &:hover,
  &:focus,
  &:has(input:focus) {
    border-color: var(--accent-color);
    background-color: var(--maine-alt-bg-color);
  }
  /* &:has(div:has(p)) {
    border-color: var(--error-color);
    background-color: var(--error-color);
  } */
`;

export const FormInput = styled.input<{ $isValid: boolean; $isDirty: boolean }>`
  display: block;
  width: 100%;
  padding: 10px 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 5px;
  font-size: var(--main-font-size);
  background-color: var(--main-bg-color);
  ${(props) => {
    if (!props.$isDirty) {
      return `background-color: var(--accent-color);`;
    } else {
      if (props.$isValid) {
        return ` background-color: var(--green-color);
                  caret-color: var(--text-color);`;
      } else {
        return `
      background-color: var(--error-color);`;
      }
    }
  }}
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  font-size: var(--font-size-regular);
  background-color: var(--full-transperent-bg);
  padding: 8px 18px;
  border: 2px solid var(--low-accent-color);
  border-radius: 5px;
  transition: border-color 250ms;
  &:hover,
  &:focus {
    background-color: var(--transperent-bg);
    border: 2px solid var(--accent-color);
  }
`;
