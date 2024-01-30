import styled from "styled-components";

export const UploaderConstainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DragNDropArea = styled.div<{ $drag: boolean }>`
  border: 2px dashed var(--accent-color);
  border-width: 2px;
  border-style: dashed;
  ${(props) => {
    if (props.$drag) {
      return `
       border-color: var(--green-color);
      `;
    }
    return `border-color: var(--accent-color);`;
  }}
  border-radius: 16px 8px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectButton = styled.button.attrs({
  type: "button",
})`
  border: 2px solid var(--accent-color);
  border-radius: 16px 8px;
  background-color: var(--accent-color);
  padding: 4px 8px;
`;

export const ImageUploaderInput = styled.input.attrs({
  type: "file",
  accept: "image/*,.png,.jpg,.gif,.web",
  multiple: true,
})`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
export const ImageUploaderLabel = styled.label`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
