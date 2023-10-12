import { LoginPageStyles } from "./LoginPage.styled";

export default function LoginPage({ arg }: any) {
	return (
		<LoginPageStyles>
			<h2>LoginPage</h2>
			<p>{arg}</p>
		</LoginPageStyles>
	);
}
