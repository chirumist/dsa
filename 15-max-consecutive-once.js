/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1,1,0,0,0,1,1,1]
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let currunt = 0

    for (var i = 0; i < nums.length; i++) {
    	if (nums[i] === 1) {
    		currunt++
    	} else {
    		max = Math.max(currunt, max);
    		currunt = 0
    	}
    }
    return Math.max(currunt, max)
};

console.log(findMaxConsecutiveOnes(nums))