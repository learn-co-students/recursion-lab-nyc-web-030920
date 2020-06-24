// Code your solution here!
// 1
function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let substring = string.substring(1, string.length);
    printString(substring);
  } else {
    return true;
  }
}
// printString("supercalifragilisticexpialidocious");

// write a recursive function to reverse a string
function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

//write a recursive function to see if a word is a palindrome
function isPalindrome(string) {
  let length = string.length;
  if (length < 2) {
    return true;
  } else if (string[length - 1] === string[0]) {
    return isPalindrome(string.substring(1, length - 1));
  } else {
    return false;
  }
}
//1. Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(arr, index) {
  return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

// 2. Write a recursive function to find the largest integer in an array.
function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

//3. Write out a function to see if an array includes a given element.
function includesNumber(arr, element) {
  if (!arr.length) {
    return false;
  } else if (arr[0] === element) {
    return true;
  } else {
    return includesNumber(arr.slice(1), element);
  }
}
