const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";
//Perche creiamo una reference a person1 e non la copia dell oggetto
console.log(person1);
console.log(person2);
