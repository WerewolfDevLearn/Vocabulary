import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
	padding: 130px;
`;

export const LogoLink = styled(Link)`
	text-transform: uppercase;
	color: var(--green-color);
	font-family: var(--logo-font);
	font-size: var(--logo-font-size);
	text-shadow: 2px 2px 2px rgba(0, 255, 206, 0.38);
`;
export const Navigation = styled.nav``;
