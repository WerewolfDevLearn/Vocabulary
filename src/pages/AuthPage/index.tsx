import { useState } from "react";
import { AuthPagePageStyles } from "./AuthPage.styled";
import { AuthPageState } from "./AuthPageTypes";

import Form from "components/Forms/AuthForm";
import SwitchButton from "components/SwitchButton";

export default function AuthPage() {
	const [formName, setFormName] = useState<AuthPageState>("Register");

	const switchName = (text: AuthPageState) => setFormName(text);
	return (
		<AuthPagePageStyles>
			<Form formName={formName} />
			<SwitchButton text={formName} onClick={switchName} />
		</AuthPagePageStyles>
	);
}
