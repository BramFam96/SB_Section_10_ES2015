/*1) Refactor the following:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
*/
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0)

//2 findMin
const findMin = (...nums) => {
	Math.min(...nums)
}
//3 object merge
const mergeObj = (obj1, obj2) => ({ ...obj1, ...obj2 })
//4 doubleAndReturn
const doubleAndReturn = (arr, ...nums) => [
	...arr,
	...nums.map((num) => num * 2),
]
//5
// I) remove random array element -> return new arr without element
const removeRandom = (arr) => {
	let randomIndex = Math.floor(Math.random() * arr.length)

	return [...arr.slice(0, randomIndex), ...arr.slice(randomIndex + 1)]
}
// II) accept two arrays and return a single, combined array
const extend = (arr1, arr2) => [...arr1, ...arr2]
//III) add a specific value from an obj
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val })
//IV) remove specific item from obj
const removeByKey = (obj, key) => {
	const workObj = { ...obj }
	delete workObj[key]
	return workObj
}
//V - combine two objs return new obj

const combineObjs = (obj1, obj2) => ({ ...obj1, ...obj2 })
//VI) return object with modified key/val
const objUpdate = (obj, key, val) => ({
	...obj,
	[key]: val,
})
