import styled from "styled-components";

export const CircularProgressBarStyles = styled.div`
	width: 450px;
	height: 450px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Rating = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #393f4212;
	border-radius: 50%;
	box-shadow: 0 0 15px #393f4280;
`;
export const Legend = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-54%, -50%);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;
export const SpecificationsList = styled.ul``;
export const Specification = styled.li<{ $color?: string }>`
	text-align: end;
	color: ${props => props.color};
`;

export const CountersList = styled.ul``;
export const Counter = styled.li<{ color: string }>`
	text-align: start;
	color: ${props => props.color};
`;

export const ChartContainer = styled.ul``;
