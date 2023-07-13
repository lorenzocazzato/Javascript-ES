function printName() {
  let helloName = "Hello Jhon";
  setTimeout(() => {
    function inner() {
      return console.log(helloName);
    }
    inner();
  }, 1000);
}
printName();
