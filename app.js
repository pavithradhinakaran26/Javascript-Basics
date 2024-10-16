
function varExample() {
    var x = 10;
    console.log("Initial var x:", x); 
    
    if (true) {
        var x = 20; 
        console.log("Inside block var x:", x);
    }
    
    console.log("After block var x:", x); 
}


function letExample() {
    let y = 10;
    console.log("Initial let y:", y); 
    
    if (true) {
        let y = 20; 
        console.log("Inside block let y:", y);
    }
    
    console.log("After block let y:", y); 
}


function constExample() {
    const z = 10;
    console.log("Initial const z:", z); 
    
    if (true) {
        const z = 20; 
        console.log("Inside block const z:", z); 
    }
    
    console.log("After block const z:", z); 
}
