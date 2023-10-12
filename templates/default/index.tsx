import { TemplateNameStyles } from "./TemplateName.styled";

export default function TemplateName({ arg }: any) {
	return (
		<TemplateNameStyles>
			<h2>TemplateName</h2>
			<p>{arg}</p>
		</TemplateNameStyles>
	);
}
