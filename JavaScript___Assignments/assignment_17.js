// Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.

// More Guests: You just found a bigger 
// dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.

let guest_list = ["Muneeb","Babar","Zain"];

console.log("Babar is not coming to the dinner due to some reason");

guest_list.splice(1,1,"Suleman")


console.log(guest_list)


console.log("I found a bigger table for dinner")

guest_list.unshift("Rahim")
guest_list.splice(2,0,"Tehreem")
guest_list.push("Kumail")

for (i = 0;i < guest_list.length; i++){
    
    console.log(`I would like to invite you for the dinner at my house ${guest_list[i]}`)
}

console.log("I can only invite 2 people for dinner")


let sliced = [];
for(i = 0;i < 4;i++){
    sliced.push(guest_list.pop());
}

for (i = 0;i < sliced.length;i++){
    console.log(`We are sorry we cant invite you for the dinner ${sliced[i]}`)
}
    
for (i = 0; i < guest_list.length;i++){
    console.log(`I would like to invite you for the dinner at my house ${guest_list[i]}`)
}
    

guest_list.pop()
guest_list.pop()
console.log(guest_list)