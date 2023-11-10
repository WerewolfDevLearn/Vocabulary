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

export default function CircularProgressBar() {
	const colors = {
		color01: "#e7a323",
		color02: "#00ffce",
		color03: "#fff",
	};
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
							000000
						</Counter>
						<Counter key='learnedcounter' color={colors.color02}>
							000000
						</Counter>
						<Counter key='repeatedcounter' color={colors.color01}>
							000000
						</Counter>
					</CountersList>
				</Legend>
				<ChartContainer key='Chart01Container'>
					<RadialChart n={50} elementColor={colors.color01} blockName='block01' />
				</ChartContainer>
				<ChartContainer key='Chart02Container'>
					<RadialChart n={40} elementColor={colors.color02} blockName='block02' />
				</ChartContainer>
				<ChartContainer key='Chart03Container'>
					<RadialChart n={30} elementColor={colors.color03} blockName='block03' />
				</ChartContainer>
			</Rating>
		</CircularProgressBarStyles>
	);
}
