import { HeaderContainer, LogoLink, Navigation } from "./Header.styled";
import Button from "components/Button";
import routes from "../../routes";
import UserData from "components/UserData";

import {} from "./Header.styled";

export default function Header() {
	return (
		<HeaderContainer>
			<LogoLink to={routes.userPage}>Vocabulary</LogoLink>
			<Navigation>
				<Button name='ADD' key='add' routName={routes.addPage} />
				<Button name='LEARN' key='learn' routName={routes.learnPage} />
				<Button name='REPEAT' key='repeat' routName={routes.repeatPage} />
			</Navigation>
			<UserData />
		</HeaderContainer>
	);
}
