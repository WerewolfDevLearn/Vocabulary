import styled from "styled-components";

export const UserProfileAvatarContainer = styled.div`
  position: relative;
  width: calc(100% - 320px / 2);
  height: 336px;
  border: 2px solid var(--accent-color);
  border-radius: 16px 8px;
  padding: 4px;
  background-color: var(--main-alt-bg-color);
  margin-bottom: 25px;
`;

export const FileInputButton = styled.button.attrs({
  type: "button",
})`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-color);
  border-radius: 12px 4px;
  padding: 20px;
`;

export const FileInput = styled.input.attrs({
  type: "file",
  accept: "image/*,.png,.jpg,.gif,.web",
})`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
export const AvatarImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
