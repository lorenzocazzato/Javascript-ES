function isAdult({ age }) {
  // const { age } = person;
  return age >= 18;
}

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 1,
};

console.log(isAdult(person));
