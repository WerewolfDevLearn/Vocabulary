import UserProfileAvatar from "../UserProfileAvatar";
import {
  UserProfileFieldName,
  UserProfileFieldEmail,
  UserProfileFieldPhone,
} from "components/Forms/UserProlifeFields";

import { UserProfileContainer } from "./UserProfileForm.styled";

export default function UserProfileForm() {
  return (
    <UserProfileContainer>
      <UserProfileAvatar />
      <UserProfileFieldName />
      <UserProfileFieldEmail />
      <UserProfileFieldPhone />
    </UserProfileContainer>
  );
}
