import styled from "styled-components";

export const AddFormToolsWrapper = styled.div`
  width: 15%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid var(--accent-color);
  border-radius: 30px 10px;
  padding: 4px;
  margin-top: 28px;
  background-color: var(--full-transperent-bg);
`;
export const AddFromTool = styled.button.attrs({
  type: "button",
})`
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px;
  background-color: var(--transperent-bg);
  border: 1px solid var(--green-color);
  border-top-left-radius: 25px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 25px;
  background-color: var(--transperent-green-color);
  &:hover {
    color: var(--accent-color);
    border-color: var(--text-color);
  }
`;
