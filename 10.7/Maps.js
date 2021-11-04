/*
Maps, or hashmaps as their called in other languages, are more versatile forms
of classic objects

The primary difference is the a map will accept any data type as a key,
where as objects automatically convert their keys to strings- also,
maps are iterable, and retain their order.

This allows us to store arrays and other objects as keys within a map;

Map cannot be defined literally like arrays and objs:

let arr = [1,2,3];
let obj = [a:1, b:2]

Instead we must invoke the keyword 'new'
 */
//We commonly invoke an empty map first
const myMap = new Map()
//We add value with a set method
myMap.set(1, 'the first', '1', 'the first str')

//Saving empty arr's and objs as keys will not work directly:
myMap.set([], 'empty arr')
//Calling myMap.get([]) will not work here, as arrs are dynamically referenced
//Instead we need to name [];
const emptyArr = []
myMap.set(emptyArr, 'empty arr')
//Now we can get the value of emptyArr;
