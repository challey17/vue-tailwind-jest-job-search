const fruits = ["apple", "banana", "orange"];
const vegetables = ["cucumber", "green beans"];

// merge 2 arrays

//incorrect, an array of 2 arrays!
console.log([fruits, vegetables]);

//spread values into new array
console.log([...fruits, ...vegetables]);
