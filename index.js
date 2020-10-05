/**
 * 1) Given the array,
 * Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
 * Loop through the array to find the longest word by how many letters each string contains.
 * Which other variables will you be needing?
 * 2) Print the length of the longest word to the console.
 * 3) Print the longest word to the console.  
 * 4) Now what if the array was 
 * Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
 * Since all the words are in one string together, how would you solve this? 

 */


function longestWord (arr) {
    let length = 0;
    let word = "";
    let result;

    if(!(arr[0].includes(" "))){
        result = helper(arr, length, word);
    } else {
        let newArr = arr[0].split(" ");
        result = helper(newArr, length, word);
    }

    console.log(result[0], result[1])
}

function helper(arr, len, word) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > len){
            len = arr[i].length;
            word = arr[i];
        }
    }
    return [word, len]
}

// let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf" ];
let lunchArray = [ "Burger  Salad  Lasagna Sushi  Meatloaf" ];
console.log(longestWord(lunchArray));

/**
 * Write a function that returns elements on odd positions in a list.
 */

// const groceries = ["carrots", "spinach", "lettuce", "tofu", "tomato", "broccoli", "potato"];

function oddElements (list) {
    let oddItems = [];
    for (let i = 0; i < list.length; i++) {
        if(i % 2 === 1){
            oddItems.push(list[i]);
        }
    }

    return oddItems;
}

 console.log(oddElements(groceries))

 /**
  * Compute the factorial of any given number
  */

function factorial(n){
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }

    return result;
}

  console.log(factorial(4));

  /**
   * Conditional Practice
   */

function mpgUsage (mpg) {

    if( mpg <= 10){
        console.log('gas guzzler');
    }
    else if (mpg >= 11 && mpg <= 16) {
        console.log("Planet still frowns upon this, and so does your wallet");
    }
    else if (mpg >= 17 && mpg <= 20) {
        console.log("It is palpable");
    }
    else if (mpg >= 21 && mpg <= 29){
        console.log("Atmosphere smiles at your decision");
    }
    else if (mpg >= 30 && mpg <= 35){
        console.log("Not many gas stops will be taken");
    }
    else if (mpg > 35) {
        console.log("If you are using the Tom Ogle fuel system, props");
    }
}

console.log(mpgUsage(6));
console.log(mpgUsage(14));
console.log(mpgUsage(19));
console.log(mpgUsage(24));
console.log(mpgUsage(31));
console.log(mpgUsage(51));