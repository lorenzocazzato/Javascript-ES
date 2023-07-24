const isLogged = true;

const promise1 = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      reject(new Error("error p1"));
    }
  });
};

const promise2 = (inputNumber) => {
  return new Promise((resolve, reject) => {
    if (inputNumber > 0.5) {
      const person = { name: "John", age: 24 };
      resolve(person);
    } else {
      reject(new Error("Error p2"));
    }
  });
};

promise1(isLogged)
  .then((randomNumber) => promise2(randomNumber))
  .then((person) => console.log(person))
  .catch((error) => console.log(error.message))
  .finally(() => console.log("Chain completata"));
