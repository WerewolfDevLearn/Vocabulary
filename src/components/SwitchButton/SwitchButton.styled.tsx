import styled from "styled-components";

export const SwitchButtonStyles = styled.button`
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
	background-color: transparent;
	border: 2px solid transparent;
	border-radius: 5px;
	font-size: var(--font-size-small);
	transition:
		border-color 250ms,
		background-color 250ms;
	&:hover,
	&:focus {
		border-width: 2px;
		border-color: var(--accent-color);
		border-radius: 5px;
		background-color: var(--transperent-bg);
	}
`;
