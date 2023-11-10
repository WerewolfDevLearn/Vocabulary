import { UserProfileFormStyles } from "./UserProfileForm.styled";

export default function UserProfileForm({ arg }: any) {
	return (
		<UserProfileFormStyles>
			<h2>UserProfileForm</h2>
			<p>{arg}</p>
		</UserProfileFormStyles>
	);
}
