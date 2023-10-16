import { SwitchButtonStyles } from "./SwitchButton.styled";
import { ISwitchButton } from "./SwitchButtonTypes";

export default function SwitchButton({ text, onClick }: ISwitchButton) {
	const textOptions = {
		Register: "Login",
		Login: "Register",
	};

	return <SwitchButtonStyles onClick={() => onClick(textOptions[text])}>{textOptions[text]}</SwitchButtonStyles>;
}
