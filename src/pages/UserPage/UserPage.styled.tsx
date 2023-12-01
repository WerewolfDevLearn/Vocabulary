import styled from "styled-components";

export const UserPageStyles = styled.section`
  /* padding: 20px 20px; */
`;

export const PageHeading = styled.h1`
  font-size: var(--heading-font-size);
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 35px;
  text-shadow: 2px 2px 60px black;
`;

export const ProfileContainer = styled.main`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const ProfileColumn = styled.div`
  width: calc((100% / 2) - 75px);
  border: 4px solid var(--accent-color);
  padding: 4px;
  border-top-left-radius: 40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 10px;
`;
export const ColumnBackground = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 60px;
  /* padding: 30px 120px 60px 120px; */
  background-color: var(--main-tansparent-bg);
  border-top-left-radius: 35px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
