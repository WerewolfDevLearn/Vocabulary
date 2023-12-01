import styled from "styled-components";

export const UserDataStyles = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const UserName = styled.p`
  text-transform: uppercase;
  width: fit-content;
  padding: 6px 40px;
  background-color: var(--transperent-bg);
  border: 4px solid var(--green-color);
  border-top-left-radius: 40px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 40px;
`;

export const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border: 3px solid var(--green-color);
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
