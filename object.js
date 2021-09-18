var myObj = {};
myObj.name = "allan";
myObj.id = 1;
myObj.status = true;
console.log(myObj); //{ name: 'allan', id: 1, status: true }

var myObj1 = { name: "brown", id: 2, email: "e.com" };
myObj1.status = true;
console.log(myObj1); //{ name: 'brown', id: 2, email: 'e.com', status: true }

console.log(myObj1.status1); //undefined
console.log(myObj1.email); //e.com
console.log(myObj1["email"]); //e.com
console.log(myObj1["email"]); //e.com

var propName = "name";
console.log(myObj1[propName]); //brown

const colName = "name";
console.log(myObj1[colName]); //brown

myObj1[colName] = "brown new";
console.log(myObj1[colName]); //brown new
