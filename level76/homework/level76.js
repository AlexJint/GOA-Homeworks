class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }


    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

  
    getCity() {
        return this.city;
    }


    getFullDescription() {
        return `სახელი: ${this.name}, ასაკი: ${this.age}, ქალაქი: ${this.city}`;
    }
}


const person = new Person("გიორგი", 30, "ბათუმი");


console.log("სახელი:", person.getName());
console.log("ასაკი:", person.getAge());
console.log("ქალაქი:", person.getCity());
console.log("სრული აღწერა:", person.getFullDescription());