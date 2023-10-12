import { RegisterPageStyles } from "./RegisterPage.styled";

export default function RegisterPage({ arg }: any) {
	return (
		<RegisterPageStyles>
			<h2>RegisterPage</h2>
			<p>{arg}</p>
		</RegisterPageStyles>
	);
}
