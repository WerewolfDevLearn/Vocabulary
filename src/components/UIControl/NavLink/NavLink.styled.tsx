import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyles = styled(NavLink)`
	width: fit-content;
	display: block;
	background-color: var(--full-transperent-bg);
	padding: 4px;
	border: 4px solid var(--low-accent-color);
	border-top-left-radius: 10px;
	border-top-right-radius: 40px;
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 10px;
	transition: border-color 250ms;
	&:hover {
		background-color: var(--transperent-bg);
		border: 4px solid var(--accent-color);
	}
	&:hover span {
		background-color: var(--maine-alt-bg-color);
	}
	&.active {
		border-color: var(--accent-color);
	}
`;
export const NavLinkSecondBg = styled.span`
	display: block;
	width: 100%;
	height: 100%;
	padding: 2px 30px;
	background-color: var(--transperent-bg);
	border-top-left-radius: 5px;
	border-top-right-radius: 30px;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 5px;
`;
