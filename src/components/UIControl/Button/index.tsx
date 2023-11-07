import { ButtonStyles, BtnSecondBg } from "./Button.styled";
import { ButtonTypes } from "./ButtonTypes";

export default function Button({ name }: ButtonTypes) {
	return (
		<>
			<ButtonStyles>
				<BtnSecondBg>{name}</BtnSecondBg>
			</ButtonStyles>
		</>
	);
}
