 originalArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const newArray = [...originalArray, 'mango'];

console.log(newArray);

 combinedArray(arr1, arr2) 
    const combined = [...arr1, ...arr2];
    console.log(combined);


combinedArray([1, 2, 3], [4, 5, 6]);


 sumAll(...numbers) 
    return numbers.reduce((sum, num) => sum + num, 0);


console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(10, 20)); 

originalArray = ['a', 'b', 'c'];
const newElements = ['x', 'y', 'z'];
const combinedArray = [...originalArray, ...newElements];
console.log(combinedArray);

 createUser(name, age, ...additionalInfo) 
    const user = {
        name,
        age,
        details: additionalInfo
    };
    console.log(user);

createUser('გიორგი', 25, 'თბილისი', 'დეველოპერი', 'ჰობი: კოდირება');


array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combin = [...array1, ...array2];
console.log(combined);
    return objects.reduce((merged, obj) => ({ ...merged, ...obj }), {});

const obj1 = { name: 'ანა', age: 30 };
const obj2 = { city: 'თბილისი', job: 'დიზაინერი' };
const obj3 = { hobby: 'მუსიკა' };

const merged = mergeObjects(obj1, obj2, obj3);
console.log(merged);


concatenateStrings(...strings) 
    return strings.join(' ');


console.log(concatenateStrings('გამარჯობა', 'მსოფლიო', 'JavaScript!'));


 originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstFive = [...originalArray].slice(0, 5);
console.log(firstFive); 

 printAll(...args) 

    args.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });


printAll('მწკრივი', 42, true, {name: 'ობიექტი'});

 person1 = { name: 'ნათია', age: 28 };
const person2 = { city: 'ბათუმი', job: 'მენეჯერი' };

const combinedPerson = { ...person1, ...person2 };
console.log(combinedPerson);


 numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = [...numbers].map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

 mergeAllObjects(...objs) 
    return objs.reduce((acc, obj) => ({ ...acc, ...obj }), {});

const car1 = { brand: 'Toyota', year: 2020 };
const car2 = { color: 'red', engine: 'hybrid' };
const car3 = { price: 25000, mileage: 15000 };

const mergedCar = mergeAllObjects(car1, car2, car3);
console.log(mergedCar);


 numbers = [15, 3, 8, 22, 1];
function findMax(array) {
    return Math.max(...array);
}

console.log(findMax(numbers)); // 22

 printPerson(firstName, lastName, ...otherInfo) 
    console.log(`სრული სახელი: ${firstName} ${lastName}`);
    console.log('დამატებითი ინფორმაცია:');
    otherInfo.forEach((info, index) => {
        console.log(`${index + 1}. ${info}`);
    });


printPerson('ლევან', 'გუგეშაშვილი', 'ასაკი: 32', 'პროფესია: პროგრამისტი', 'ქალაქი: თბილისი');

 enhanceObject(obj) 
    return {
        ...obj,
        createdAt: new Date().toLocaleDateString('ka-GE'),
        id: Math.random().toString(36).substr(2, 9),
        isActive: true
    };


const basicUser = { name: 'სოფიო', email: 'sofio@example.com' };
const enhancedUser = enhanceObject(basicUser);
console.log(enhancedUser);