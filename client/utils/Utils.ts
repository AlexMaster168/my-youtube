export function formatNumberToK(num: number) {
	const abbreviations = ['', 'K', 'M', 'B', 'T'];
	const sign = Math.sign(num);
	num = Math.abs(num);

	if (num < 1000) return (sign * num).toString();

	const exp = Math.floor(Math.log10(num) / 3);
	const rounded = (num / Math.pow(1000, exp));

	const roundedDown = Math.floor(rounded * 10) / 10;

	// @ts-ignore
	return (sign * roundedDown).toString() + abbreviations[exp];
}
