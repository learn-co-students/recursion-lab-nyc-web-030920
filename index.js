// Code your solution here!
function printString(string){
    console.log(string[0])
    if (string.length > 1) {
        let myString = string.substring(1, string.length)
        printString(myString)
    } else {
        return true
    }
}

function reverseString(string){
    if (string !== ''){
        return reverseString(string.substring(1)) + string[0]
    } else {
        return string
    }
}