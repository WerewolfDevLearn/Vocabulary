import styled from "styled-components";

export const AddFromContainer = styled.div`
  width: calc(100% / 2);
  max-height: 100%;
  border: 4px solid var(--accent-color);
  border-radius: 16px 8px;
  padding: 4px;
`;
export const AddFormBackground = styled.div`
  padding: 2px;
  background-color: var(--transperent-bg);
  border-top-left-radius: 12px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 12px;
  padding: 8px;
  display: flex;
  gap: 8px;
`;

export const AddForm = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const FiledsWrapper = styled.div`
  max-height: 800px;
  overflow: auto;
  padding: 10px;
`;

export const AddFromSubmitButton = styled.button.attrs({
  type: "submit",
})`
  display: block;
  text-align: center;
  padding: 4px;
  width: 30%;
  margin: 0 auto;
  background-color: var(--transperent-bg);
  border: 2px solid var(--accent-color);
  border-top-left-radius: 35px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 35px;
`;

export const InnerBackground = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-top-left-radius: 31px;
  border-top-right-radius: 1px;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 31px;
  &:hover,
  &:focus {
    background-color: var(--accent-color);
  }
`;
