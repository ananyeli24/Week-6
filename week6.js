/* EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
Example 1:
Input: [1 , 4 , 7]  Output: 4
Input: [10, 5]  Output: 7.5
Input: [1.5, 3, 2.5, 1]  Output: 2

let average = function (arr) {
    let total = arr.reduce(function (initialVal, numAdded) {
    return initialVal + numAdded 
    }, 0)
return total / arr.length 
}
console.log(average([1,2,3]));

MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on 
Arrays to aid in working through this problem. 
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1


 let newFunct = function (arr, target) { 
     if (arr.includes (target)) {
     return arr.indexOf(target);
     } else { 
         return -1

     }
}
 console.log(newFunct([0,1,2,4,5,6,7], 4) );



*VERY HARD: You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. If that 
amount of money cannot be made up by any combination of the coins, return -1.
Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
Note: You may assume that you have an infinite number of each kind of coin.
*/
let value = 11;
let copper = [1,2,5];
let input = function(coins, amount) {
    let biggestArr;
    let counter= 0; 
    while(amount > 0) {

       biggestArr = Math.max(...coins)
        if (biggestArr > amount) {

            coins = coins.filter(function(removingNum) {
               return removingNum !== biggestArr
            })
            if (coins.length == 0 ) { 
                return -1
            }
        } else {
            amount -= biggestArr 
         counter++
        } 
   console.log(coins)
}
return counter
}
console.log(input(copper, value));
