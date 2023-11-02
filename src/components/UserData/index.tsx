import { useUser } from "reduxfiles/selectors";
import { UserDataStyles, UserName, UserPhoto } from "./UserData.styled";

export default function UserData() {
	const user = useUser();
	return (
		<UserDataStyles>
			<UserName>{user.name}</UserName>
			<UserPhoto>{user.avatarURL}</UserPhoto>
		</UserDataStyles>
	);
}
