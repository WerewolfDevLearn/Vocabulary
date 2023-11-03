import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
	display: flex;
	align-items: baseline;
	padding: 25px 130px;
	border-bottom: 4px solid var(--accent-color);
	background-color: var(--low-accent-color);
`;

export const LogoLink = styled(Link)`
	text-transform: uppercase;
	color: var(--green-color);
	font-family: var(--logo-font);
	font-size: var(--logo-font-size);
	text-shadow: 2px 2px 2px rgba(0, 255, 206, 0.38);
	margin-right: 235px;
`;
export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	gap: 40px;
	margin-right: 170px;
`;
