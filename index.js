
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

function addUpTo(array, index){
    if(index > 0){
        console.log(array[index])
        return array[index] + addUpTo(array, --index)
    } else {
        return array[index]
    }
}

function maxOf(array){
    if(array.length === 1){
        return array[0]
    }else{
        return Math.max(array.shift(), maxOf(array))
    }
}

function includesNumber(array, number){
    if(array[0] === number){
        return true
    } else if(array.length > 1) {
        return includesNumber(array.slice(1), number)
    }
    return false
}