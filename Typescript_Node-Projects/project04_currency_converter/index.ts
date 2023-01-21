#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res,2000);
    })
}

async function welcome(){
    let rainbow = chalkAnimation.rainbow('Lets start Your Conversions')
    await sleep();
    rainbow.stop()
}
await welcome()

let conversion = {
    "PKR" : {
        "USD":0.0044,
        "GBP":0.0037,
        "PKR":1
    },
    "GBP":{
        "USD":1.21,
        "PKR":271.79,
        "GBP":1
    },
    "USD":{
        "PKR":225.50,
        "GBP":0.83,
        "USD":1
    }
}

const answers:{
    from:'PKR' | 'USD' | 'GBP',
    to:'PKR' | 'USD' | 'GBP',
    amount:number
} = await inquirer.prompt([
    {
        type:"list",
        name:"from",
        choices:['PKR','USD','GBP'],
        message:"Select your currency: "

    },
    {
        type:"list",
        name:"to",
        choices:['PKR','USD','GBP'],
        message:"Select your conversion currency: "
    },
    {
        type:"number",
        name:"amount",
        message:"Enter your conversion amount : "
    }
])

if(answers.from && answers.to && answers.amount){
    let result:number = conversion[answers.from][answers.to] * answers.amount
    console.log(chalk.bgBlueBright(`Your conversion from ${answers.from} to ${answers.to} is ${result}`))
}else{
    console.log(chalk.bgRedBright('Invalid Input'))
}