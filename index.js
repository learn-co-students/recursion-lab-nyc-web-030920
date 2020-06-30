// Code your solution here!

// Code your solution here!

function printString(word) {
    console.log(word[0])
    if (word.length > 1) {
        word = word.substring(1, word.length)
        printString(word)
    } else {
        true
    }
}

function reverseString(word) {
    if (word === "") {
        return ""
    } else {
        return reverseString(word.substring(1)) + word[0]
    }
}

function isPalindrome(word) {
    if (word.length < 2) {
        return true
    } else if (word[0] === word[word.length - 1]) {
        isPalindrome(word.substring(1, word.length - 1))
        return true
    } else {
        return false
    }
}

function addUpTo(array, index) {
    return index ? array[index] + addUpTo(array, --index) : array[index];
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
}

function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
        return false;
    } else if (myArray[0] === myNumber) {
        return true;
    } else {
        return includesNumber(myArray.slice(1), myNumber);
    }
}