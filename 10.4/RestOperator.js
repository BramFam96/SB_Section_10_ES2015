//The Arguments object
/*The arguments object exists in every function - and is essentially 
an arr of what has been passed in. However it's finicky in the same 
way nodelists are. It doesn't support many common arr methods
Commonly, devs would turn this into an array with Arr.from or someting equivalent
However, arrow functions do not create argument objects

//Rest/Spread

But that's old news!
We no longer need to worry about the argument obj thanks to the rest/spread operator!
This operator does away with pesky arguement object manipulation,
the rest/spread operator automatically converts an undetermined number of args
into a workable array;

//Rest
When we see ... in a function param list, it is functioning as a rest operator:
function doSomething(...params);
While this syntax is commonly used to get all values passed in, rest is also used
in conjuction with named params:
funciton doStuff(a,b,...rest);

*/
const makeFamily = (mom, dad, ...kids) => {
	return {
		parents: [mom, dad],
		kids: kids.length ? kids : 0,
	}
}
makeFamily('Jill', 'Jack', 'jr', 'maggie')

const filterByType = (type, ...vals) => {
	return vals.filter((v) => typeof v === type)
}
//Spread
/*
Spread is in many ways the conceptual opposite to Rest;
Spread is an operation that unpacks array content for us. 
We use it like:

method(...source)
[...source]
{...source, newProp: value}

Fantastically useful for running number or string methods when we start with a collection;
//Note spreading into an array only works from another array
similarly spreading from an obj only works from another object

Spread does not make deep copies. Nested obj and array values are not unpacked;
Infact, nested arrays and objs are exact references to our source.
This means modifying the internals of copies also modifies original sources
*/
