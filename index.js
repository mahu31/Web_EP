// Task 1
const celsiusToFahrenheit = (celsius) =>  (celsius * 9/5) + 32
console.log(celsiusToFahrenheit(0))

// Task 2
const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(2));


