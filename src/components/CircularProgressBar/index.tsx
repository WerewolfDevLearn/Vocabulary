import {
	CircularProgressBarStyles,
	Rating,
	Legend,
	Block1,
	Block2,
	Block3,
	SpecificationsList,
	Specification,
	CountersList,
	Counter,
} from "./CircularProgressBar.styled";

export default function CircularProgressBar({ arg }: any) {
	const generator = () => {
		const arr: string[] = [];
		for (let i = 0; i < 100; i++) {
			arr.push(`${3.6 * i}deg`);
		}

		return arr;
	};
	const array = generator();
	return (
		<CircularProgressBarStyles>
			<Rating key='ratioChart'>
				<Legend>
					<SpecificationsList>
						<Specification key='added' color='#fff'>
							ADDED
						</Specification>
						<Specification key='learned' color='#00ffce'>
							LEARNED
						</Specification>
						<Specification key='repeated' color='#e7a323'>
							REPEATED
						</Specification>
					</SpecificationsList>
					<CountersList>
						<Counter key='added-counter' $color='#fff'>
							000000
						</Counter>
						<Counter key='learned-counter' $color='#00ffce'>
							000000
						</Counter>
						<Counter key='repeated-counter' $color='#e7a323'>
							000000
						</Counter>
					</CountersList>
				</Legend>

				{array.map(item => {
					return (
						<>
							<Block1 $angle={item} $color='#e7a323' key={item} />
							<Block2 $angle={item} $color='#00ffce' key={`${item}2`} />
							<Block3 $angle={item} $color='#ffffff' key={`${item}3`} />
						</>
					);
				})}
			</Rating>
		</CircularProgressBarStyles>
	);
}
