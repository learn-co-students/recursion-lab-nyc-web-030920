
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

function isPalindrome(string){
    let strLength = string.length
    string = string.toLowerCase()
    if(strLength === 0 || strLength === 1){
        return true
    }
    if(string[0] === string[strLength - 1]){
        return isPalindrome(string.slice(1, string.length -1)) 
    }
    return false
}