
export function formatNumberToK(num: number) {
	if (num < 1000) return num.toString()
	else {
		const rounded = Math.floor(num / 100) / 10
		return rounded.toString() + 'K'
	}
}
