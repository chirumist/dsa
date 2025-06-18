(function(){
    let x = 78125;

    function isPowerOfTwo(n) {
        console.log(n)
        if(n <= 1) return true;
        else if(n % 2 !== 0) return false
        return isPowerOfTwo(n / 2);
    }

    console.log(isPowerOfTwo(x))
})()