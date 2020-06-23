// Code your solution here!

function printString (myString) {
    console.log(myString[0])
    if (myString.length > 1) { //sets base case
        let mySubString = myString.substring(1, myString.length); // removes string[0] from the original string
        printString(mySubString);
      } else {
        return true;
      }

}

// function reverseString(myString) {
//     let newString = [];
//     for (let i=0; i < myString.length; i++) {
//      newString.unshift(myString[i])
//     }
//   newString = newString.join('')
//   return newString
// }

function reverseString(myString) {
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
  }


  function isPalindrome(myString) {
    if (myString[0] === myString[myString.length -1]) {
      if (myString.length >1 ) {
        return isPalindrome(myString.substring(1, myString.length -1))
      } else {return true}
    }
    else { return false}
}


// [1,2,3,4,5]

function addUpTo(array, index) {
    if (index > 0){
        return array[index] + addUpTo(array, --index)
    } else {return array[index]}
}

function maxOf(array) {
    if (array.length > 1) {
        return Math.max(array.pop(), maxOf(array))
    } else {return array[0]}
}

function includesNumber(array, element) {
    
    if (array[0] === element) {return true}
    else {
        if (array.length > 0) {
        return includesNumber(array.slice(1), element)
        } else {return false}
    }
}