/**
 * @param {number[]} nums
 * @return {number}
 * [1,1,2] = [1,2,_]
 * [0,0,1,1,1,2,2,3,3,4] = [0,1,2,3,4,_,_,_,_,_]
 * 
 */

const arr = [0,0,1,1,1,2,2,3,3,4,4,4,5]
var removeDuplicates = function(nums) {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[x]) {
            x += 1
            nums[x] = nums[i]

        }
    }
    return nums
};

console.log(removeDuplicates(arr))