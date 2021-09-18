var myObj1 = { name: "allan", id: 1, edu: { school: "harvard" } };
myObj1.status = true;
console.log(myObj1); //{ name: 'allan', id: 1, edu: { school: 'harvard' }, status: true }
console.log(myObj1.edu.school); //harvard
console.log(myObj1.edu["school"]); //harvard

var myObj2 = myObj1;
console.log(myObj2.edu.school); //harvard

console.log(myObj2.edu.degree); //undefined
console.log(myObj2); //{ name: 'allan', id: 1, edu: { school: 'harvard' }, status: true }
delete myObj2.id;
console.log("*deleted*");
console.log(myObj2); //{ name: 'allan', edu: { school: 'harvard' }, status: true }
console.log(myObj1); //{ name: 'allan', edu: { school: 'harvard' }, status: true }

var arr1 = ["ab", "c2", "d3", myObj2];
console.log(arr1);
console.log(arr1[1]); //c2
console.log(arr1["1"]); //c2
console.log(arr1["3"].name); //allan
