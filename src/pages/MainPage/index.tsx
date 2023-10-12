import { MainPageStyles } from "./MainPage.styled";

export default function MainPage({ arg }: any) {
	return (
		<MainPageStyles>
			<h2>MainPage</h2>
			<p>{arg}</p>
		</MainPageStyles>
	);
}
