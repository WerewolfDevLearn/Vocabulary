import { NavLinkTypes } from "./NavLinkTypes";
import { NavLinkStyles, NavLinkSecondBg } from "./NavLink.styled";

export default function NavLink({ name, routName }: NavLinkTypes) {
	return (
		<NavLinkStyles to={routName}>
			<NavLinkSecondBg>{name}</NavLinkSecondBg>
		</NavLinkStyles>
	);
}
