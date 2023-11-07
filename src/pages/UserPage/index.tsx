import { UserPageStyles, PageHeading, ProfileColumn, ProfileContainer, ColumnBackground } from "./UserPage.styled";
import CircularProgressBar from "components/CircularProgressBar";
export default function UserPage() {
	return (
		<UserPageStyles>
			<PageHeading>Profile</PageHeading>
			<ProfileContainer>
				<ProfileColumn key='statistics'>
					<ColumnBackground>
						<CircularProgressBar />
					</ColumnBackground>
				</ProfileColumn>
				<ProfileColumn key='profile-data'>
					<ColumnBackground></ColumnBackground>
				</ProfileColumn>
			</ProfileContainer>
		</UserPageStyles>
	);
}
