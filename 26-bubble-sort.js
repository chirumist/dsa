(function(){
    let array = [7,6,2,1,4,8,5,0]
    console.log([...array])

    function bubbleSort(arr) {
        let x = arr.length
        for(let i = 0; i < x; i++) {
            let isSwapped = false
            for (let j = 0; j < x - 1 - i; j++) {
                if(arr[j] > arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                    isSwapped = true
                }
            }
            if(!isSwapped) false
        }
        return arr
    }
    console.log(bubbleSort(array))
})()