let current_user = ['Hunain','Hamza','Irfan','Ali','Zakir'];
let new_user = ['Hameed','Salman','Zakir','Hunain','Muneeb'];
for(i = 0;i < new_user.length;i++){
    if(current_user.includes(new_user[i])){
        console.log("This name already exist, you need to try again")
    }
    else{
        console.log("This usenname is available")
    }
}