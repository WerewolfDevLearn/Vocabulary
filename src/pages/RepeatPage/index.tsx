import { RepeatPageStyles } from "./RepeatPage.styled";

export default function RepeatPage({ arg }: any) {
	return (
		<RepeatPageStyles>
			<h2>RepeatPage</h2>
			<p>{arg}</p>
		</RepeatPageStyles>
	);
}
