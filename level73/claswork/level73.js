let array = [10, 20, 30, 40, 50];


let obj = {
    name: "გიორგი",
    age: 25,
    city: "თბილისი"
};


console.log("for...in ობიექტისთვის:");
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

console.log("\nfor...of მასივისთვის:");
for (let item of array) {
    console.log(item);
}


const sayHello = () => console.log("Hello World!");
sayHello();

const add = (a, b) => a + b;
console.log("5 + 3 =", add(5, 3));


let data = [10, 20, 30, 40, 50];


data.forEach((item, index) => {
    console.log("start");
    console.log(index, item);
    console.log("end");
});
