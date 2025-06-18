(function(){
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	let nums = [9,6,4,2,3,5,7,0,1]
	var missingNumber = function(nums) {
		let x = nums.length
		let totalSum = (x * (x+1)) / 2
		let partSum = 0
		for (var i = 0; i < nums.length; i++) {
			partSum += nums[i]
		}
		return totalSum - partSum
	};
	console.log(missingNumber(nums))
})()	