/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [0,1,0,3,12]
var moveZeroes = function(nums) {
    let x = 0
    for (var i =  0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[x] = nums[i]
            x++
        }
    }

    for (var i = x; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};
console.log(moveZeroes(nums))


/*
var moveZeroes = function(nums) {
    let x = 0
    let i = 0
    while(x < nums.length) {
        if(i < nums.length) {
            if(nums[i] !== 0) {
                nums[x] = nums[i];
                x++
            }
        } else {
            nums[x] = 0;
            x++
        }
        i++
    }
}
*/