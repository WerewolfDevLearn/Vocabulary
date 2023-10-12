import { FormStyles } from "./Form.styled";

export default function Form({ arg }: any) {
	return (
		<FormStyles>
			<h2>Form</h2>
			<p>{arg}</p>
		</FormStyles>
	);
}
