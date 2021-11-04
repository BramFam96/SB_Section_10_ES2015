/*
Another new data type is the set. Set is essentially the arr form of map.

In a set, there is no key, and each value must be unique;

This means we do not need to check if an item exists in a set;
The set itself will reject the items that exist;

Not only is this less code, but sets have far lower, consistent run-times 
compared with manually iterating and checking if values exists in an arr;

*/
const bannedHashTags = new Set(['hello', 'goodbye'])
//returns Set {'h','e','l','o'};

//bc the set iterates over the first arg passed -  and strings are iterable
