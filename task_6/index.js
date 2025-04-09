//Task 6
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjects({a: 1, b: 5}, {a:-1, b: 1, c: 4}))
