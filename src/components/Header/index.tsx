import { HeaderContainer, LogoLink, Navigation } from "./Header.styled";
import routes from "../../routes";
import NavLink from "components/UIControl/NavLink";
import UserData from "components/UserData";

import {} from "./Header.styled";

export default function Header() {
	return (
		<HeaderContainer>
			<LogoLink to={routes.userPage}>Vocabulary</LogoLink>
			<Navigation>
				<NavLink name='ADD' key='add' routName={routes.addPage} />
				<NavLink name='LEARN' key='learn' routName={routes.learnPage} />
				<NavLink name='REPEAT' key='repeat' routName={routes.repeatPage} />
			</Navigation>
			<UserData />
		</HeaderContainer>
	);
}
