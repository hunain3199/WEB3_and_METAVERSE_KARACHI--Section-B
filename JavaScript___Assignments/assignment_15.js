// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guest_list = ["Muneeb","Babar","Zain"];

console.log("Babar is not coming to the dinner due to some reason");

guest_list.splice(1,1,"Suleman")


console.log(guest_list)

for (i = 0;i < guest_list.length; i++){
    
    console.log(`I would like to invite you for the dinner at my house ${guest_list[i]}`)
}