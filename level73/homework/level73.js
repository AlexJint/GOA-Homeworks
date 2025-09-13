const myarray = [1, "two", true, 4.5, "five"];

const myobject = {
  name: "Giorgi",
  age: 25,
  city: "Tbilisi"
};


console.log("for...in მასივისთვის:");
for (let index in myArray) {
  console.log(`Index: ${index}, Value: ${myArray[index]}`);
}


console.log("for..of მასივისთვის:");
for (let value of myArray) {
  console.log(`Value: ${value}`);
}


console.log("for...in ობიექტისთვის:");
for (let key in myobject) {
  console.log(`Key: ${key}, Value: ${myObject[key]}`);
}

const sayHello = () => "Hello World";
console.log(sayHello());

const add = (a, b) => a + b;
console.log(add(5, 3)); 


const myArray = [1, "two", true, 4.5, "five"];

myArray.forEach(item => console.log(`Element: ${item}`));


const myObject = {
  name: "Giorgi",
  age: 25,
  city: "Tbilisi"
};


for (let key in myObject) {
  console.log(`Key: ${key}, Value: ${myObject[key]}`);
}


const numbers = [1, 2, 3, 4, 5];


const doubled = numbers.map(num => num * 2);


console.log(doubled); 