// Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase, uppercase, and titlecase.

let person = "hUnain";
function titleCase(){
    split = person.toLowerCase().split(' ');
    for (i = 0;i < split.length; i++){
        split[i]=split[i].charAt(0).toUpperCase() + split[i].slice(1);
        
    }
    return split.join(' ')
    

}
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(titleCase())
