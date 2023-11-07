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
export const Counter = styled.li<{ $color: string }>`
	text-align: start;
	color: ${props => props.color};
`;

export const Block1 = styled.div<{ $angle: string; $color: string }>`
	position: absolute;
	width: 3px;
	height: 15px;
	background: ${props => props.$color};
	left: 50%;
	transform-origin: 50% 225px;
	transform: rotate(${props => props.$angle});
`;
export const Block2 = styled.div<{ $angle: string; $color: string }>`
	position: absolute;
	top: 25px;
	width: 3px;
	height: 15px;
	background: ${props => props.$color};
	left: 50%;
	transform-origin: 50% 200px;
	transform: rotate(${props => props.$angle});
`;
export const Block3 = styled.div<{ $angle: string; $color: string }>`
	position: absolute;
	top: 50px;
	left: 50%;
	width: 3px;
	height: 15px;
	background: ${props => props.$color};
	transform-origin: 50% 175px;
	transform: rotate(${props => props.$angle});
`;
