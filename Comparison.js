// Step 1: Store your favorite numbers
let firstFavNumb = 10;  // Replace with your actual favorite number
let secondFavNumb = "10"; // Same number, but as a string to show comparison differences

// Step 2: Perform comparisons
let isGreater = firstFavNumb > secondFavNumb;
let isLess = firstFavNumb < secondFavNumb;
let isGreaterOrEqual = firstFavNumb >= secondFavNumb;
let isLessOrEqual = firstFavNumb <= secondFavNumb;

let isStrictEqual = firstFavNumb === secondFavNumb; // compares value and type
let isLooseEqual = firstFavNumb == secondFavNumb;   // compares value only

let isStrictNotEqual = firstFavNumb !== secondFavNumb;
let isLooseNotEqual = firstFavNumb != secondFavNumb;

// Step 3: Log all results
console.log("Is firstFavNumb > secondFavNumb?:", isGreater);
console.log("Is firstFavNumb < secondFavNumb?:", isLess);
console.log("Is firstFavNumb >= secondFavNumb?:", isGreaterOrEqual);
console.log("Is firstFavNumb <= secondFavNumb?:", isLessOrEqual);

console.log("Strict equality (===):", isStrictEqual);   // false, because number !== string
console.log("Loose equality (==):", isLooseEqual);     // true, because values are the same

console.log("Strict inequality (!==):", isStrictNotEqual); // true
console.log("Loose inequality (!=):", isLooseNotEqual);    // false
