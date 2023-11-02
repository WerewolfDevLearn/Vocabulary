import { AddPageStyles } from "./AddPage.styled";

export default function AddPage({ arg }: any) {
	return (
		<AddPageStyles>
			<h2>AddPage</h2>
			<p>{arg}</p>
		</AddPageStyles>
	);
}
