import styled from "styled-components";

export const Block1 = styled.div.attrs<{ $angle: string; $bg: string }>(props => ({
	style: {
		backgroundColor: props.$bg,
		boxShadow: `0 0 15px ${props.$bg}85,0 0 30px ${props.$bg}85`,
		transform: `rotate(${props.$angle})`,
	},
}))`
	position: absolute;
	width: 3px;
	height: 15px;
	left: 50%;
	transform-origin: 50% 225px;
`;

export const Block2 = styled.div.attrs<{ $angle: string; $bg: string }>(props => ({
	style: {
		backgroundColor: props.$bg,
		boxShadow: `0 0 15px ${props.$bg}85,0 0 30px ${props.$bg}85`,
		transform: `rotate(${props.$angle})`,
	},
}))`
	position: absolute;
	top: 25px;
	width: 3px;
	height: 15px;
	left: 50%;
	transform-origin: 50% 200px;
`;
export const Block3 = styled.div.attrs<{ $angle: string; $bg: string }>(props => ({
	style: {
		backgroundColor: props.$bg,
		boxShadow: `0 0 15px ${props.$bg}85,0 0 30px ${props.$bg}85`,
		transform: `rotate(${props.$angle})`,
	},
}))`
	position: absolute;
	top: 50px;
	width: 3px;
	height: 15px;
	left: 50%;
	transform-origin: 50% 175px;
`;
const blocks: { [key: string]: typeof Block1 } = {
	block01: Block1,
	block02: Block2,
	block03: Block3,
};

export default blocks;
