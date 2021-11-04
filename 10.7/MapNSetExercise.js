/*
1)
[1,2,3,4]

2)
['ref']

3)
{Array(3) => true, Array(3) => false}

4)
const hasDuplicate = arr => new Set(arr).size !== arr.length;

5)
*/
const isVowel = (letter) => {
	return 'aeiou'.includes(letter)
}
const vowelCount = (str) => {
	const vowelMap = new Map()

	for (let letter of str) {
		let standardChar = letter.toLowerCase()
		if (isVowel(lowerCaseChar)) {
			vowelMap.set(standardChar, vowelMap.get(standardChar) + 1)
		} else {
			vowelMap.set(standardChar, 1)
		}
	}
	return vowelMap
}
