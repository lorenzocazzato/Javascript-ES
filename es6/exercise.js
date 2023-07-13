function printName() {
  let helloName = "Hello Jhon";
  function inner() {
    return console.log(helloName);
  }
  inner();
}
printName();
