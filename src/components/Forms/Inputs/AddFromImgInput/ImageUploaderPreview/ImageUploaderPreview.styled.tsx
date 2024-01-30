import styled from "styled-components";

export const ImageUploaderPreviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const ImageUploaderPreviewItem = styled.li.attrs<{ $valid: boolean }>({
  draggable: true,
})`
  position: relative;
  width: calc((100% / 5) - 10px);
  border: 2px solid;
  border-color: ${(props) => {
    return props.$valid ? "var(--accent-color)" : "var(--error-color)";
  }};
  border-radius: 16px 6px;
  overflow: hidden;
`;
export const ImageUploaderPreviewContent = styled.img.attrs<{
  src: string;
  alt: string;
}>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  pointer-events: none;
  object-fit: cover;
  /* width: 100%;
  height: auto; */
`;
export const ImageUploaderPreviewItemDeleteButton = styled.button.attrs({
  type: "button",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1px;
  right: -1px;
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
