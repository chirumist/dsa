/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * nums1 = [1], m = 1, nums2 = [], n = 0
 * nums1 = [0], m = 0, nums2 = [1], n = 1
 */
let nums1 = [1,2,4,0,0,0]
let nums2 = [2,4,6]
var merge = function(nums1, m , nums2, n) {
	let p1 = 0, p2 = 0;
	let xCopy = nums1.slice(0, m)
	for (var i = 0; i < m+n; i++) {
		if(p2 >= n || (p1 < m && xCopy[p1] < nums2[p2])) {
			nums1[i] = xCopy[p1]
			p1++;
		} else {
			nums1[i] = nums2[p2]
			p2++
		}
	}
	return nums1
}
console.log("Approach 2 >>>>>>>> " + merge(nums1, 3, nums2, 3))

var nums3 = [7,5,8,0,0,0]
var nums4 = [2,4,6]
var merge2 = function(nums3, m , nums4, n) {
	let p1 = m - 1, p2 = n - 1;
	for(i = (m + n) - 1; i >= 0; i--) {
		if((nums4[p2] > nums3[p1]) || p1 < 0) {
			nums3[i] = nums4[p2]
			p2--;
		} else {
			nums3[i] = nums3[p1]
			p1--;
		}
	}
	return nums3
}

console.log("Approach 3 >>>>>>>> " + merge2(nums3, 3, nums4, 3))

/*
var merge = function(nums3, m, nums4, n) {
    let p1 = m - 1, p2 = n - 1;
	for(i = (m + n) - 1; i >= 0; i--) {
        if(p2 < 0) {
            break;
        }
		if(p1 >=0 && (nums3[p1] > nums4[p2])) {
            nums3[i] = nums3[p1]
			p1--;
		} else {
			nums3[i] = nums4[p2]
			p2--;
		}
	}
	return nums3
};
*/