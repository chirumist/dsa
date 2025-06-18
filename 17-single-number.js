(function(){

    // /**
    //  * @param {number[]} nums
    //  * @return {number}
    //  */
    // let nums = [4,1,2,1,2]
    // var singleNumber = function(nums) {
    //     let hash = {}
    //     for(let i = 0; i < nums.length; i++) {
    //         if(!hash[nums[i]]) {
    //             hash[nums[i]] = 1
    //         } else {
    //             hash[nums[i]] ++
    //         }
    //     }
    //     for(let i = 0; i < nums.length; i++) {
    //         if(hash[nums[i]] === 1) {
    //             return nums[i];
    //         }
    //     }
    // };
    
    // console.log(singleNumber(nums))
    let nums = [4,1,2,1,2]
    var singleNumber = function(nums) {
        let xor = 0
        for(let i = 0; i < nums.length; i++) {
            xor = xor ^ nums[i];
        }
    
        return xor
    };
    console.log(singleNumber(nums))
    
    /*
    function encryptDecrypt(input, key) {
        let result = "";
        for (let i = 0; i < input.length; i++) {
            result += String.fromCharCode(input.charCodeAt(i) ^ key);
        }
        return result;
    }
    
    const secret = encryptDecrypt("hello", 42);   // encrypted
    const original = encryptDecrypt(secret, 42);  // decrypted
    console.log(secret);  // BOFFE
    console.log(original); // "hello"
    */
})()