//The BIG-O NOTATION

//sum of first n natural numbers using the linear complexity
function summation(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }

    return sum;
}
console.log(summation(10));

//using constant complexity
function summation(n){
    return (n * (n + 1)) / 2;
}
console.log(summation(10))


//Fibonnaci series
//given a number n find the first n elements of the fibonacci sequence
function fibonacci(n){
    const fib = [0,1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonacci(7)) //[0,1,1,2,3,5,8]