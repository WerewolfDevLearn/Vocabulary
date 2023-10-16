import { ButtonStyles, BtnSecondBg } from "./Button.styled";
import { ButtonTypes } from "./ButtonTypes";

export default function Button({ name }: ButtonTypes) {
	return (
		<>
			<ButtonStyles className='header-btn'>
				<BtnSecondBg className='btn-second-bg'>{name}</BtnSecondBg>
			</ButtonStyles>
		</>
	);
}
