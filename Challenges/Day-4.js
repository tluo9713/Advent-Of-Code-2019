/*
--- Day 4: Secure Container ---

You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

However, they do remember a few key facts about the password:

    It is a six-digit number.
    The value is within the range given in your puzzle input.
    Two adjacent digits are the same (like 22 in 122345).
    Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).

Other than the range rule, the following are true:

    111111 meets these criteria (double 11, never decreases).
    223450 does not meet these criteria (decreasing pair of digits 50).
    123789 does not meet these criteria (no double).

How many different passwords within the range given in your puzzle input meet these criteria?
*/

function day4Part1(min, max) {
  let solutions = 0;
  for (let i = min + 1; i < max; i++) {
    //If number is valid, increase counter
    if (isValid(i)) solutions++;
  }
  return solutions;
}

function isValid(num) {
  let str = String(num);
  let twoConsecutive = false;
  //Iterate through ever digit in number
  for (let i = 1; i < str.length; i++) {
    let prevDigit = Number(str[i - 1]);
    let currDigit = Number(str[i]);
    //If there are two consecutive numbers that are the same, turn the flag
    //to be true
    if (prevDigit === currDigit) twoConsecutive = true;
    //If current digit is less than previous digit, just return false
    if (currDigit < prevDigit) return false;
  }
  //If there aren't two consecutive numbers, we just return false, otherwise
  //we return true. to make it simpler, just return the boolean.
  return twoConsecutive;
}

/*
--- Part Two ---

An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.

Given this additional criterion, but still ignoring the range rule, the following are now true:

    112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
    123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
    111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).

How many different passwords within the range given in your puzzle input meet all of the criteria?

*/
function day4Part2(min, max) {
  let solutions = 0;
  for (let i = min + 1; i < max; i++) {
    if (isValid2(i)) solutions++;
  }
  return solutions.length;
}

function isValid2(num) {
  let str = String(num);
  let twoConsecutive = false;
  //Same logic as before BUT we need to make sure two consecutive digts aren't part of a larger group of numbers
  for (let i = 1; i < str.length; i++) {
    let prevDigit = Number(str[i - 1]);
    let currDigit = Number(str[i]);
    if (prevDigit === currDigit) {
      //If there are two consecutive numbers that are the same, we want to check if the next digit is the same. If it's different, that means there are two consecutive digits.
      if (Number(str[i + 1]) !== currDigit) {
        twoConsecutive = true;
      } else {
        //if there are more than 2, we keep incrementing i until it's not the same digit. It should be noted that when we reach the end of the array, undefined is not equal to current Digit so it will still work as intended.
        while (Number(str[i + 1]) === currDigit) i++;
      }
    }
    if (currDigit < prevDigit) return false;
  }

  return twoConsecutive;
}

let min = 307237;
let max = 769058;

console.log(day4Part1(min, max));
console.log(day4Part2(min, max));
