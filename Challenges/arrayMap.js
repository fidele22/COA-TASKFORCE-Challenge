function hasSubarrayWithSum(arr, target) {  

    // Initialize two pointers, start and end, both set equal to 0.
    let currentSum = 0;
    let start = 0;
    
   // we Use a variable currentSum to keep track of the sum of the elements.
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
       //  For each iteration, add the value at end to currentSum.
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        if (currentSum === target) {
            return true;
        }
    }

    //If the loop completes without finding a matching subarray, return false.
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target));  // Output: true
