function Person(name, age, city, occupation) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.occupation = occupation;
}


let person1 = new Person("ანა", 25, "თბილისი", "პროგრამისტი");
let person2 = new Person("გიორგი", 30, "ბათუმი", "მასწავლებელი");

console.log("მაგალითი 1:", person1);
console.log("მაგალითი 2:", person2);