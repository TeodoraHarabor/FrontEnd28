/*task 1a*/
function numbersFrom1To20() {
  for (var i = 1; i <= 20; i++) {
    console.log(i);
  }
}
numbersFrom1To20();

/*task 1b*/
function oddNumbers() {
  for (var i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
oddNumbers();

/*task 2*/
// for (i = 1; i <= 20; i++) {
//   if (i % 3 == 0) {
//     console.log("Fizz");
//   }
//   if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 5 == 0 && i % 3 == 0) {
//     console.log("fizzBuzz");
//   } else {
//     console.log(i);
//   }
// }
