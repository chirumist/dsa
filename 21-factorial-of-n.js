(function(){
    let x = 5;
    
    function fact(n) {
        if(n === 1) return 1;
    
        return n * fact(n - 1);
    }
    console.log(fact(x))
})()