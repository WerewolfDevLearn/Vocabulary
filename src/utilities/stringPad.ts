export default function stringPad(string: number, length: number): string {
	const pre = string.toString();
	if (pre.length < length) {
		return pre.padStart(length, "0");
	}
	return pre;
}
