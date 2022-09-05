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

/*task 2a*/
function sum() {
  var arr = [2, 3, 5, 7, 5, 3];
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
}
sum();

/*task 2b*/
function maximum() {
  let arr = [2, 3, 5, 7, 5, 3];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}
maximum();

/*task 4*/
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
