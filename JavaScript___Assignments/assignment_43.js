// Unchanged Magicians: Start with your work from Exercise 40. Call 
// the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store 
//  it in a separate array. Call show_magicians() with each array to show that you have one array
//  of the original names and one array with the Great added to each magician’s name.

let Great_magician = []
let magician_name=["MAX MAVEN","MASKED MAGICIAN","CAMPBELL McRAE","JAY MARSHAL"];
function make_great(){
    for(i = 0;i < magician_name.length;i++){
        Great_magician.push(`The Great ${magician_name[i]}`)
    }
    return Great_magician
}
function show_magician(arr){
    for(i = 0;i < arr.length;i++){
        console.log(arr[i])
    }
}

make_great()
show_magician(magician_name)
show_magician(Great_magician)



