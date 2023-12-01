import styled from "styled-components";

export const UserProlifeInputFrom = styled.form<{ $isvalid: boolean; disabled: boolean }>`
  position: relative;
  z-index: 10;
  width: 390px;
  display: flex;
  overflow: hidden;
  background-color: var(--main-alt-bg-color);
  font-size: var(--main-font-size);
  border: 2px solid var(--low-accent-color);
  padding: 4px;
  border-top-left-radius: 16px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 16px;
  border-color: var(--accent-color);
  transition:
    border-color 250ms,
    width 250ms;

  &:hover,
  &:focus,
  &:focus-within {
    width: 490px;
  }
  ${(props) => {
    if (props.disabled) {
      return `border-color: var(--accent-color);`;
    } else {
      if (props.$isvalid) {
        return `
       border-color: var(--green-color);
      `;
      } else {
        return `
      border-color: var(--error-color);`;
      }
    }
  }}
`;

export const UserProlifeInput = styled.input.attrs<{
  disabled: boolean;
  type: string;
  $isvalid: boolean;
}>((props) => ({
  type: props.type,
  disabled: props.disabled,
}))`
  display: block;
  width: 390px;
  position: relative;
  z-index: 2;
  border-top-left-radius: 10px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 10px;
  background-color: var(--low-accent-color-Nottransparent);
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  transition: box-shadow 250ms;
  box-shadow: 4px 0 0px var(--main-alt-bg-color);

  ${(props) => {
    if (props.disabled) {
      return `
        background-color: var(--accent-color)
      `;
    } else {
      if (props.$isvalid) {
        return `
       background-color: var(--green-color);
       caret-color: var(--text-color);
    `;
      } else {
        return `
      background-color: var(--error-color);`;
      }
    }
  }};
`;

export const InputSwitch = styled.button`
  display: block;
  width: 100px;
  height: calc(100% - 8px);
  font-size: var(--font-size-regular);
  text-align: end;
  line-height: 1;
  position: absolute;
  right: 4px;
  z-index: 1;
  padding: 0px 30px;
  background-color: var(--accent-color);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 10px;
`;
