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

/*task 2c*/
function elementAppears() {
  const arr = [2, 3, 5, 7, 5, 3];
  let count = 0;

  for (const element of arr) {
    if (element === 5) {
      count += 1;
    }
  }

  console.log(count);
}
elementAppears();

/*task3*/
function fib() {
  var n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= 50; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
fib();

/*task 4*/
function alert() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log("Fizz");
    }
    if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 5 == 0 && i % 3 == 0) {
      console.log("fizzBuzz");
    } else {
      console.log(i);
    }
  }
}
alert();
