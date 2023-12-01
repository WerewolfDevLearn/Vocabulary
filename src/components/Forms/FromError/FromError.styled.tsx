import styled from "styled-components";

export const ErrorWrapper = styled.div`
  font-size: var(--font-size-small);
  line-height: 1;
  height: 20px;
`;
export const ErrorElement = styled.p`
  width: fit-content;
  margin: 0 auto;
  padding: 2px 20px;
  border-radius: 4px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  text-align: center;
  color: var(--text-color);
  background-color: var(--error-color);
`;
