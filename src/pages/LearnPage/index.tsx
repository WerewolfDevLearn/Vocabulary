import { LearnPageStyles } from "./LearnPage.styled";

export default function LearnPage({ arg }: any) {
	return (
		<LearnPageStyles>
			<h2>LearnPage</h2>
			<p>{arg}</p>
		</LearnPageStyles>
	);
}
