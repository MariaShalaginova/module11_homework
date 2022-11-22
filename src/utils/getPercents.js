export function getPercents(percent, number) {

	const percentIsNumber = !isNaN (percent);
	const numberIsNumber = !isNaN(number);

	if (!percentIsNumber || !numberIsNumber) {
		return "arguments are not a number"
	}

	if (percent === 0) {
		return "percent can not equal 0"
	}
	
	return number / 100 * percent;
}