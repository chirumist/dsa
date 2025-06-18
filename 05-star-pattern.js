(function() {
    // 1. square pattern
    const sq = 4;
    for(let i = 0; i < sq; i++) {
        let row = "";
        for(let j = 0; j< sq; j++) {
            row += " *"
        }
        console.log(row)
    }
    console.log("&nbsp;")
    // 2. Top small to bottom large star pattern
    const tb = 4;
    
    for(let i = 0; i < tb; i++) {
        let row = ""
        for(let j = 0; j <= i; j++) {
            row += " *"
        }
        console.log(row)
    }
    console.log("&nbsp;")
    // 3. Top small to bottom large print j number pattern
    
    const tjb = 5;
    
    for(let i = 0; i < tjb; i++) {
        let row = ""
        for(let j = 0; j <= i; j++) {
            row += (j + 1)
        }
        console.log(row)
    }
    console.log("&nbsp;")
    // 4. Top small to bottom large print i number pattern
    
    const tib = 5;
    
    for(let i = 0; i < tib; i++) {
        let row = ""
        for(let j = 0; j <= i; j++) {
            row += (i + 1)
        }
        console.log(row)
    }
    console.log("&nbsp;")
    // 5. Top large to bottom small j number pattern
    
    const tljb = 5
    
    for(let i = 0; i < tljb; i++) {
        let row = "";
        for(let j = 0; j < (tljb - i); j++) {
            row += (j + 1)
        }	
        console.log(row)
    }
    
    for(let i = tljb; i > 0; i--) {
        let row = ""
        for(let j = 0; j < i; j++) {
            row += (j + 1)
        }
    
        console.log(row)
    }
    console.log("&nbsp;")
    // 6. top start space to end star pattern
    const tses = 5
    
    for (let i = 0; i < tses; i++) {
        let row = "";
        for (let j = 0; j <= tses; j++) {
            if (j < (tses-i)) { 
                row += " "
            } else {
                row += "*"
            }
        }
        console.log(row)
    }
    
    for (let i = 0; i < tses; i++) {
        let row = "";
        for (let j = 0; j < tses - (i + 1); j++) {
            row += "_"
        }
        for (let j = 0; j <= i; j++) {
            row += "*"
        }
        console.log(row)
    }
    console.log("&nbsp;")
    // 7. alternate 1 or 0 pattern
    
    const anum = 5
    
    for (let i = 0; i < anum; i++) {
        let row = "";
        let part = "1"
        for (let j = 0; j <= i ; j++) {
            row += part
            if (part === "1") {
                part = "0"
            } else {
                part = "1"
            }
        }
        console.log(row)
    }
    console.log("&nbsp;")
    // 8. alternate j 1 or 0 pattern
    let partAlt = "1"
    for (let i = 0; i < anum; i++) {
        let row = "";
        for (let j = 0; j <= i ; j++) {
            row += partAlt
            if (partAlt === "1") {
                partAlt = "0"
            } else {
                partAlt = "1"
            }
        }
        console.log(row)
    }
})()