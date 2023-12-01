import { useUser } from "reduxfiles/selectors";
import { UserDataStyles, UserName, UserPhoto } from "./UserData.styled";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
export default function UserData() {
  const user = useUser();
  return (
    <NavLink to={routes.userPage}>
      <UserDataStyles>
        <UserName>{user.name}</UserName>
        <UserPhoto src={user.avatarUrl} alt={user.name} />
      </UserDataStyles>
    </NavLink>
  );
}
