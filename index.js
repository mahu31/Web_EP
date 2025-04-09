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

// Task 3
const reverseArr = (arr) => {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;
};

console.log(reverseArr([1, 2, 3, 4, 5, 8]));
