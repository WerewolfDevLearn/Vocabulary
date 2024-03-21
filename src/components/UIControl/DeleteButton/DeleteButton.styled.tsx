import styled from "styled-components";

export const DeleteButtonStyles = styled.button.attrs({
  type: "button",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 38px;
  right: 0px;
  padding: 8px;
  color: var(--main-alt-bg-color);

  background-color: var(--accent-color);
  border-radius: 8px 4px;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: var(--error-color);
    color: var(--accent-color);
  }
`;
