import {
  UserPageStyles,
  PageHeading,
  ProfileColumn,
  ProfileContainer,
  ColumnBackground,
} from "./UserPage.styled";
import CircularProgressBar from "components/CircularProgressBar";
import Date from "components/DateComp";
import UserProfileForm from "components/Forms/UserProfileForm";
export default function UserPage() {
  return (
    <UserPageStyles>
      <PageHeading>Profile</PageHeading>
      <ProfileContainer>
        <ProfileColumn key="statistics">
          <ColumnBackground key="statisticsbg">
            <Date />
            <CircularProgressBar />
          </ColumnBackground>
        </ProfileColumn>
        <ProfileColumn key="profiledata">
          <ColumnBackground key="profiledatabg">
            <UserProfileForm />
          </ColumnBackground>
        </ProfileColumn>
      </ProfileContainer>
    </UserPageStyles>
  );
}
