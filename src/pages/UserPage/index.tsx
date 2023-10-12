import { UserPageStyles } from "./UserPage.styled";

export default function UserPage({ arg }: any) {
	return (
		<UserPageStyles>
			<h2>UserPage</h2>
			<p>{arg}</p>
		</UserPageStyles>
	);
}
