export interface ISwitchButton {
	text: "Register" | "Login";
	onClick: (text: "Register" | "Login") => void;
}
