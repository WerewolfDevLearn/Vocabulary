import { ButtonStyles, BtnSecondBg } from "./Button.styled";
import { ButtonTypes } from "./ButtonTypes";

export default function Button({ name, routName }: ButtonTypes) {
	return (
		<>
			<ButtonStyles className='header-btn' to={routName}>
				<BtnSecondBg className='btn-second-bg'>{name}</BtnSecondBg>
			</ButtonStyles>
		</>
	);
}
