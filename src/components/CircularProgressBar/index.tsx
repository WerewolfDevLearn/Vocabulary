import {
	CircularProgressBarStyles,
	Rating,
	Legend,
	ChartContainer,
	SpecificationsList,
	Specification,
	CountersList,
	Counter,
} from "./CircularProgressBar.styled";
import RadialChart from "components/RadialChart";

import stringPad from "utilities/stringPad";

export default function CircularProgressBar() {
	const colors = {
		color01: "#e7a323",
		color02: "#00ffce",
		color03: "#fff",
	};

	const numbers = {
		added: 90,
		learned: 50,
		repeated: 80,
	};
	const numberOfDigital = 6;

	return (
		<CircularProgressBarStyles>
			<Rating>
				<Legend>
					<SpecificationsList key='SpecificationsList'>
						<Specification key='added' color={colors.color03}>
							ADDED
						</Specification>
						<Specification key='learned' color={colors.color02}>
							LEARNED
						</Specification>
						<Specification key='repeated' color={colors.color01}>
							REPEATED
						</Specification>
					</SpecificationsList>
					<CountersList key='CountersList'>
						<Counter key='addedcounter' color={colors.color03}>
							{stringPad(numbers.added, numberOfDigital)}
						</Counter>
						<Counter key='learnedcounter' color={colors.color02}>
							{stringPad(numbers.learned, numberOfDigital)}
						</Counter>
						<Counter key='repeatedcounter' color={colors.color01}>
							{stringPad(numbers.repeated, numberOfDigital)}
						</Counter>
					</CountersList>
				</Legend>
				<ChartContainer key='Chart01Container'>
					<RadialChart n={numbers.repeated} elementColor={colors.color01} blockName='block01' />
				</ChartContainer>
				<ChartContainer key='Chart02Container'>
					<RadialChart n={numbers.learned} elementColor={colors.color02} blockName='block02' />
				</ChartContainer>
				<ChartContainer key='Chart03Container'>
					<RadialChart n={numbers.added} elementColor={colors.color03} blockName='block03' />
				</ChartContainer>
			</Rating>
		</CircularProgressBarStyles>
	);
}
