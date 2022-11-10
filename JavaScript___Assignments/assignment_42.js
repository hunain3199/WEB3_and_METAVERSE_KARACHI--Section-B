// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//   by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

let magician_name=["MAX MAVEN","MASKED MAGICIAN","CAMPBELL McRAE","JAY MARSHAL"];
function make_great(){
    for(i = 0;i < magician_name.length;i++){
        magician_name[i] =`The Great ${magician_name[i]}`
    }
    return magician_name
}
function show_magician(arr){
    for(i = 0;i < arr.length;i++){
        console.log(arr[i])
    }
}
show_magician(make_great(magician_name))

