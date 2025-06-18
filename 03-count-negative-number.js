(function() {
	const arr1 = [2, -6, 4, 8, 1, -9];
	
	function countNegative(arr) {
		let count = 0
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] < 0) {
				count++
			}
		}
	
		return count
	}
	
	console.log(countNegative(arr1))
})()