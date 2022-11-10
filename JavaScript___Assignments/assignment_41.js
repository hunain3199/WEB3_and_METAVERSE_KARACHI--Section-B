// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.


let magician_name=["MAX MAVEN","MASKED MAGICIAN","CAMPBELL McRAE","JAY MARSHAL"];
function show_magician(arr){
    for(i = 0;i < arr.length;i++){
        console.log(arr[i])
    }
}
show_magician(magician_name)