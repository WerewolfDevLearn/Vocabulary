import { LogoStyles } from "./Logo.styled";

export default function Logo({ arg }: any) {
	return (
		<LogoStyles>
			<h2>Logo</h2>
			<p>{arg}</p>
		</LogoStyles>
	);
}
