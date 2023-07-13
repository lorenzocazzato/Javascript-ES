// function multiplyByTwo(value) {
//   let number = 2;
//   let multiplier = value;
//   function inner() {
//     let multiply = multiplier * number;
//     return console.log(multiply);
//   }
//   inner();
// }
// multiplyByTwo(4);
function multiplyByTwo(value) {
  return function inner(number) {
    return value * number;
  };
}

console.log(multiplyByTwo(4)(2));
