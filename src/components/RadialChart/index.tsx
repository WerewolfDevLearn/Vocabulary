import { useCallback } from "react";
import { nanoid } from "nanoid";
import blocks from "./RadialChart.styled";
import { Fade } from "react-awesome-reveal";
import { IProps } from "./RadialChartTypes";

export default function RadialChart({ n, elementColor, blockName }: IProps) {
	const Block = blocks[blockName];
	const generator = useCallback((color: string) => {
		const arr: { angle: string; id: string; color: string }[] = [];
		for (let i = 0; i < 100; i++) {
			const element = {
				angle: `${3.6 * i}deg`,
				id: nanoid(),
				color: i >= n ? "transparent" : color,
			};

			arr.push(element);
		}
		return arr;
	}, []);
	const array = generator(elementColor);

	return (
		<>
			{array.map((item, idx) => (
				<li key={item.id}>
					<Fade key={item.id} duration={50} delay={50 * idx}>
						<Block $angle={item.angle} key={item.id} $bg={item.color} />
					</Fade>
				</li>
			))}
		</>
	);
}
