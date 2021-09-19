var arr = [1, 2, 3];
arr[3] = 4;
console.log(arr[1]); //2
console.log(arr[3]); //4
console.log(arr.length); //4

//splice
let cars = ["1", "2", "3", "4", "5"];
cars.splice(2, 1);
console.log(cars); //[ '1', '2', '4', '5' ]

//concat
var a = [1, 2, 3];
var b = a.concat(4);
console.log(b); //[ 1, 2, 3, 4 ]

//clone
let combined = [...a, ...b];
console.log(combined);

combined = [...a, 45, ...b];
console.log(combined);

//filter
var b = a.filter((val) => val != 2);
console.log(b); //[ 1, 3]

//updating
var b = a.map((val) => (val === 1 ? 11 : val));
console.log(b); //[ 11, 2, 3]
