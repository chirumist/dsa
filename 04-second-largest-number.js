const arr1 = [0, 3, 5, 2, 7, 9];
const arr2 = [4, 4, 4, 4];
const arr3 = [5];
const arr4 = [10, 20];
const arr5 = [10, 20, 20, 10];

function findSecondLargest(arr) {
	if(arr.length < 2){
		return "Array should have at least two numbers";
	}

	let first = -Infinity;
	let second = -Infinity
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > first) {
			second = first;
			first = arr[i];
		} else if(arr[i] > second && arr[i] !== first) {
			second = arr[id]
		}
	}

	return second === -Infinity ? "No second largest found" : second;
}

console.log("arr1", findSecondLargest(arr1), arr1)
console.log("arr2", findSecondLargest(arr2), arr2)
console.log("arr3", findSecondLargest(arr3), arr3)
console.log("arr4", findSecondLargest(arr4), arr4)
console.log("arr5", findSecondLargest(arr5), arr5)