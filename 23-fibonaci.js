(function(){
    // Fibonaci Sequance 0,1,2,3,5,8,13,21

    let x = 6

    function fib(n) {
        if(n == 0 || n == 1) return n;

        return fib(n - 1) + fib(n - 2);
    }

    console.log(fib(x));
})()