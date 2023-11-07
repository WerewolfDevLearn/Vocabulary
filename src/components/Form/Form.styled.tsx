import styled from "styled-components";

export const FormStyles = styled.form`
	width: 575px;
	padding: 20px;
	border-top-left-radius: 10px;
	border-top-right-radius: 40px;
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 10px;
	border: 4px solid var(--accent-color);
	background-color: var(--transperent-bg);
	box-shadow:
		15px 15px 150px 2px rgba(112, 98, 63, 0.2),
		-15px -15px 150px 2px rgba(112, 98, 63, 0.2),
		-15px 15px 150px 2px rgba(112, 98, 63, 0.2),
		15px -15px 150px 2px rgba(112, 98, 63, 0.2),
		inset 15px 15px 400px 2px #50aba01f;
	margin-bottom: 5px;
`;

export const FormHeading = styled.h2`
	font-size: var(--heading-font-size);
	text-align: center;
`;

export const FormLabel = styled.label`
	font-size: var(--font-size-small);
	text-transform: uppercase;
`;

export const FormInputContainer = styled.div`
	border: 2px solid var(--low-accent-color);
	background-color: var(--main-bg-color);
	padding: 4px;
	margin-bottom: 25px;
	border-top-left-radius: 10px;
	border-top-right-radius: 40px;
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 10px;
	transition: border-color 250ms;
	&:hover,
	&:focus,
	&:has(input:focus) {
		border-color: var(--accent-color);
		background-color: var(--maine-alt-bg-color);
	}
	&:has(p) {
		border-color: var(--accent-color);
		background-color: var(--maine-alt-bg-color);
	}
`;

export const FormInput = styled.input`
	display: block;
	width: 100%;
	padding: 10px 40px;
	border-top-left-radius: 5px;
	border-top-right-radius: 35px;
	border-bottom-left-radius: 35px;
	border-bottom-right-radius: 5px;
	font-size: var(--main-font-size);
	background-color: var(--main-bg-color);
`;

export const SubmitButton = styled.button`
	display: block;
	margin: 0 auto;
	font-size: var(--font-size-regular);
	background-color: var(--full-transperent-bg);
	padding: 8px 18px;
	border: 2px solid var(--low-accent-color);
	border-radius: 5px;
	transition: border-color 250ms;
	&:hover,
	&:focus {
		background-color: var(--transperent-bg);
		border: 2px solid var(--accent-color);
	}
`;
export const ErrorElement = styled.p`
	width: fit-content;
	margin: 0 auto;
	padding: 2px 20px;
	border-radius: 4px;
	border-bottom-right-radius: 24px;
	border-bottom-left-radius: 24px;
	text-align: center;
	font-size: var(--font-size-small);
	color: var(--text-color);
	background-color: var(--error-color);
`;
