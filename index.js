function hasTargetSum(array, target) {
  const seenNumbers = new Set(); 

  for (const number of array) {   
    const complement = target - number; 

    if (seenNumbers.has(complement)) { 
      return true; 
    }

    seenNumbers.add(number);  
  }

  return false;  // No pair found
}

/* 
  Time complexity: O(n), where n is the length of the array.
  - We loop through the array once, and checking for the presence of a number in the set (and adding to the set) are O(1) operations.

  Space complexity: O(n), where n is the number of elements in the array.
  - In the worst case, we store all numbers in the set.
*/

/*
  Additional test cases:
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); 

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));  

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));  

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 3, 7], 6));  

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 1, 3, 9], 20)); 
}

module.exports = hasTargetSum;
