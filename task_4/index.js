// Task 4
const countOccurrences = (arr, value) => {
    let counter = 0;
    arr.map((item) =>  item === value ? counter ++ : '')
    return counter
};

console.log(countOccurrences([1, 2, 3, 2, 2], 2))
