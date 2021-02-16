/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?
*/

const numbers = [10, 15, 3, 7];
const addUpToK = (k) => {
  return numbers.map((value, index) => {
      for (let i = index; i <= numbers.length - 1; i++) {
        if (value + numbers[i] === k) return [value, numbers[i]];
      }
    }).filter((value) => value && value);
};

console.log(addUpToK(17));
