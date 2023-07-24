function repeatHello(callback) {
  setInterval(callback, 1000);
}

let printHello = () => {
  console.log("Hello");
};

repeatHello(printHello);
