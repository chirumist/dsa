(function(){
    // Binary Search Only Works On Sorted Array
    const array = [0,1,2,4,5,8,9,10];

    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1

        while (right >= left ) {
            let mid = Math.floor((left + right) / 2)
            console.log(arr[mid])
            if(arr[mid] === target) {
                return arr[mid]
            } else if(arr[mid] > left) {
                    left = mid+1 
                } else {
                    right = mid - 1
                }
        }
    }

    console.log(binarySearch(array, 9))
})()