#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = ()=>{
    return new Promise((res) => {
        setTimeout(res,2000)
    })
}
async function welcome() {
    let rainbow = chalkAnimation.rainbow('Lets MAKE Your TODO LIST')
    await sleep();
    rainbow.stop()
    
}
await welcome()
    
const todoS : string[] = []

async function todo_list(){
    

    let todos :{
        todo : string,
        Add_more : boolean
    } =
    await inquirer.prompt([
    {
        type : "string",
        name : "todo",
        message : chalk.bgMagentaBright("Enter your todo "),    
    },
    {
        type : "confirm",
        name : "Add_more",
        default : false,
        when(answers) {
            if(answers.todo || answers.todo > 0){
                todoS.push(answers.todo)
                console.log(todoS)
                    
                }
            else{
                    console.log("Enter your todo or exit")
                }
                    
        },
    }
 ])   
}

async function restart(){
    do{
        await todo_list()
    var restart_again = await inquirer.prompt({
        type:"input",
        name:"restart",
        message:chalk.bgRedBright("Do you want to continue? yes or no: ")
    })
}while(restart_again.restart == "y" || restart_again.restart == "YES" || restart_again.restart == "yes" || restart_again.restart == "Y" || restart_again.restart == "Yes")
  
}

await restart();
  
async function delet(){
    do{
        
        var delets = await inquirer.prompt({
            type: "confirm",
            name:"delete",
            message:"Do you want to delete todo",
        })
        while(todoS.length > 0){
        if(delets.delete){
            todoS.pop()
        }
        else{
            
            break
        }
    }

    
}
while(delets.delete == "y" || delets.delete == "YES" || delets.delete == "yes" || delets.delete == "Y" || delets.delete)
}
console.log(todoS)
await delet()
console.log(todoS)



