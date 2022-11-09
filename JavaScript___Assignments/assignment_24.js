var nationality = "Pakistani";
var age = 30;
var names = ["Hamza","Irfan"];

// string
console.log(nationality === "U.S.A"); // false
console.log(nationality !== "Iran"); // true
console.log(nationality === "Pakistani"); // true
console.log(nationality === "pakistani"); // false
console.log(nationality.toLowerCase() === "pakistani"); // true

// number
console.log(age === 30); // true
console.log(age === 40); // false
console.log(age > 40); // false
console.log(age < 40); // true
console.log(age >= 30); // true
console.log(age <= 30); // true

// "and" and "or"
console.log(nationality === "Pakistani" && age > 20); // true
console.log(nationality === "Pakistani" && age > 50); // false
console.log(nationality === "Pakistani" || age > 50); // true

console.log(names.includes("Irfan")); // true
console.log(names.includes("Hunain")); // false