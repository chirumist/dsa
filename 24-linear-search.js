(function(){
    const arr = [2,5,6,7,1,8]

    function linearSearch(array, target) {
        for (let index = 0; index < array.length; index++) {
            if(array[index] === target) {
                return JSON.stringify({index, value: array[index]})
            }
            
        }
    }
    console.log(linearSearch(arr, 7))
})()