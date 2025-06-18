(function () {
	const arr1 = [2, -6, 4, 8, 1, -9];

	function findLargest(arr) {
		let num = -Infinity;
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] > num) {
				num = arr[i] 
			}
		}

		return num
	}

	console.log(findLargest(arr1))
})()