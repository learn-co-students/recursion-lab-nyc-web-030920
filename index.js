// Code your solution here!

function printString(str){
    console.log(str[0]);

    if(str.length > 1) {
        printString(str.substring(1));
    }
}

function reverseString(str){
    return str[str.length - 1] + 
        (str.length > 1
            ? reverseString(str.substring(0, str.length-1)) 
            : "");
}

function isPalindrome(str){
    if(str.length > 1){
        if(str[0] === str[str.length-1]){
            const sub = str.substring(1, str.length-1);
            return isPalindrome(sub);
        }
        return false;
    }

    return true;
}

function addUpTo(arr, num){
    return arr[num] + (num > 0 ? addUpTo(arr, num-1) : 0);
}

function maxOf(arr){
    const head = arr[0];
    
    let max_rest = 0;
    
    if(arr.length > 1){
        max_rest = maxOf(arr.slice(1));
    }
    
    return Math.max(head, max_rest);
}

function includesNumber(arr, num){
    if(arr[0] === num){
        return true;
    }
    else if(arr.length > 1){
        return includesNumber(arr.slice(1), num);
    }
    return false;
}