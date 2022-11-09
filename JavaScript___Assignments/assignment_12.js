// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.

let names = ["Hamza","Zain","Suleman","Muneeb"];
for (i = 0; i < names.length;i++){
    let name = names[i]
    console.log(`Good Morning ${name}`)
}