// AREA OF A TRAPEZIUM

// function trapezium () {
//   let a = Number(prompt("enter first base in cm"));
//   let b = Number(prompt("enter second base in cm"));
//   let h = Number(prompt("enter height in cm"));

//   let areaOfTrapezium = (1/2)*(a+b)*h;
//   alert(areaOfTrapezium);

//   console.log(areaOfTrapezium);

//   alert((1/2)*(2+5)*3);  
// }


// DRAW A TRIANGLE
// let triangle = "";
// let counter = 0;

// while (counter < 7) {
//   triangle += "#";
//   console.log(triangle);
//   counter++;
// }

// write a program that uses console.log to print all the ns from 1-100
// for (let n = 1; n <= 100; n++) {
//     if (n % 3 === 0) {
//         console.log("Fizz");
//     } else if (n % 5 === 0 && n % 3 !== 0) {
//         console.log("Buzz");
//     } else if (n % 3 === 0 && n % 5 === 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(n);
//     }    
// }

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }

// CHESSBOARD

// let board = "";

// for (let y = 0; y < 8; y++) {
//   for (let x = 0; x < 8; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

// Write a function min that takes 2 arguments and returns their minimum
// function min (a, b) {
//   if (a < b) return a;
//   else return b;
// }
// console.log(min(5,7));

// function isEven (n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n-2);
// }

// console.log(isEven(-3));
// console.log(isEven(10));
// console.log(isEven(7));

// Write a function countBs that takes a string as its only argument and
// returns a number that indicates how many uppercase “B” characters
// there are in the string.

// function countBs (string) {
//   let numOfBs = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == "B") numOfBs += 1;
//   }
//   return numOfBs
// }

// console.log(countBs("Barbed"));

// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that is
// to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.

// function countChar (string, Char) {
//   let numOfChar = 0;
//   for  (let i = 0; i < string.length; i++) {
//     if (string[i] == Char) numOfChar++;
//   }
//   return numOfChar;
// }

// console.log(countChar("keckakk", "k"))

// let journal = [];
// function addEntry(events, squirrel) {
// journal.push({events, squirrel});
// }

// addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
// console.log(journal)

