// Sandwiches: Write a function that accepts a array of items a
//  person wants on a sandwich. The function should have one parameter
//   that collects as many items as the function call provides, and it 
//   should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.


function sandwich(arr) {
    console.log(`Items on sandwich ${arr}`);
}

let sandwich1 = ["Chicken Sandwich","Egg Sandwich","Seafood Sandwich","Roast Beef Sandwich","Grilled Cheese","Ham Sandwich","Nutella Sandwich","Grilled Chicken Sandwich"];
let sandwich2 = ["Chicken Sandwich","Grilled Cheese","Ham Sandwich","Nutella Sandwich","Grilled Chicken Sandwich"];
let sandwich3 = ["Chicken Sandwich","Egg Sandwich","Seafood Sandwich","Roast Beef Sandwich",];

sandwich(sandwich1);
sandwich(sandwich2);
sandwich(sandwich3);