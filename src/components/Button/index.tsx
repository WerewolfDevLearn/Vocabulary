import { ButtonStyles } from "./Button.styled";

export default function Button({ arg }: any) {
	return (
		<ButtonStyles>
			<h2>Button</h2>
			<p>{arg}</p>
		</ButtonStyles>
	);
}
