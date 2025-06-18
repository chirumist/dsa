(function(){
    const num = 121
    
    function isPelindrom(n) {
        if (n < 0) return false;
        let val = n
        let rev = 0;
        while (val > 0) {
            let mod = val % 10;
            rev = (10 * rev) + mod
            val = Math.floor(val / 10);
        }
        return rev === n
    }
    
    console.log(isPelindrom(num))
})()