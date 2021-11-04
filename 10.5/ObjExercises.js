/*Refactoring ES5 into ES2015:
1)

function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/
const createInstructor = (first, last) => ({
	first,
	last,
})
/*
2)
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/
const favoriteNumber = 42
const instructor = {
	first: 'Colt',
	[favoriteNumber]: `That's my favorite!`,
}
/*
3)
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/
const instructor = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!'
	},
	sayBye() {
		return this.firstName + ' says bye!'
	},
}
//4)
const createAnimal = (species, call, noise) => ({
	species: [species],
	[call]() {
		console.log([noise])
	},
})
