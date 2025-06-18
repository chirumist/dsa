(function(){
    // Reverse Number WIth Nagative & also 32bit number limit 2 power of 31
    
    const num = 214748364
    
    function reverseNumber(n) {
        const nCopy = n;
        let rev = 0;
        n = Math.abs(n);
    
        while (n > 0) {
            let rem = n % 10;
            rev = (10 * rev) + rem
            n = Math.floor(n / 10);
        }
        const limit = 2**31
        if (rev > limit) return 0
    
        return nCopy < 0 ? -rev : rev
    
    }
    
    console.log(reverseNumber(num))
})()