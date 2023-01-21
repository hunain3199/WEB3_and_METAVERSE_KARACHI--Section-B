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
    let rainbow = chalkAnimation.rainbow('Lets start Your Quiz')
    await sleep();
    rainbow.stop()
}
await welcome()


const answers = await inquirer.prompt([
    {
        type:'list',
        name:'question1',
        choices:['Framework','Library'],
        message:'Nextjs is a framework or library: '
    },
    {
        type:'list',
        name:'question2',
        choices:['npm run dev','npm start'],
        message:'What is nextjs server command? '
    },
    {
        type:'list',
        name:'question3',
        choices:['vercel','netlify'],
        message:'Which website is best for hosting nextjs app? '
    }
])

const marks = 10;
const fail = 0;

if(answers.question1 === "Framework"){
    console.log(chalk.bgYellow('Your answer 1 is correct'))
}
else{
    console.log(chalk.bgRedBright('Your answer 1 is incorrect'))
}

if(answers.question2 === "npm run dev"){
    console.log(chalk.bgCyan('Your answer 2 is correct'))
}
else{
    console.log(chalk.bgRedBright('Your answer 2 is incorrect'))
}
if(answers.question3 === "vercel"){
    console.log(chalk.bgMagenta('Your answer 3 is correct'))
}
else{
    console.log(chalk.bgRedBright('Your answer 3 is incorrect'))
}

