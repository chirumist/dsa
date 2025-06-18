(function(){
    let array = [7,6,2,1,0,4,8,5]
    console.log([...array])

    function selectionSort(arr) {
        let x = arr.length
        for(let i = 0; i < x; i++) {
            let min = i;
            for (let j = i + 1; j < x; j++) {
                if(arr[j] < arr[min]) {
                    min = j
                }
            }
            if(arr[min] !==  arr[i]) {
                [arr[i], arr[min]] = [arr[min], arr[i]]
            }
        }
        return arr
    }
    console.log(selectionSort(array))
})()