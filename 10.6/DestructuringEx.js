/*
Obj 1)
console.log(numplanets) === 8;
console.log(yearNeptuneDiscovered) === 1846;
Obj 2)
console.log(discoveryYears) == 
{ yearNeptuneDiscovered: 1846,  yearMarsDiscovered: 1659 }
Obj 3)
`Your name is Alejandro and you like purple`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ;                                                                                                                                                                                                                                                                                                                                                                                                                                   
`Your name is Melissa and you like green`;
`Your name is undefined and you like green`;

Arr 1) 
Maya, Marisa, Chi;

Arr 2)
'Raindrops on roses'
'whiskers on kittens'
["Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"]

Arr 3)
[10,30,20]

Refactor 1)

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
2)
*/
const obj = { numbers: { a: 1, b: 2 } }

let { a, b } = obj.numbers
/*
3)
arrSwap
[arr[0],arr[1]] = [arr[1], arr[0]];

4)
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])


*/
const raceResults = ([first, second, third, ...rest]) => ({
	first,
	second,
	third,
	rest,
})
