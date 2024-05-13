let a = prompt("Enter a Number: ");

// M<ethod 1: using Recursive Approach
function factorial(num){
    if(num == 1 || num == 0){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(a)) 

// Method 2: using Reduce method

let b = 6
function fact(num){
    let arr = Array.from(Array(num+1).keys());
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    return c;
}
console.log(fact(b))


// Method 3: using for loop

let d = 6
function factFor(num){
    let c = 1;
    for(let i = 1; i <= num; i++){
        c = c * i;
    }
    return c;
}
console.log(factFor(d))