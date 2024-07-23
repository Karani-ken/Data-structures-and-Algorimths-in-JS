//The BIG-O NOTATION

//sum of first n natural numbers using the linear complexity
function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}
console.log(summation(10));

//using constant complexity
function summation(n) {
    return (n * (n + 1)) / 2;
}
console.log(summation(10))


//Fibonnaci series
//given a number n find the first n elements of the fibonacci sequence
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(7)) //[0,1,1,2,3,5,8]

//Factorial of a number

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))

//prime numbers

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}

console.log(isPrime(3))

//power of two

function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}