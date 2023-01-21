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
    let rainbow = chalkAnimation.rainbow('Lets start Your word counter game')
    await sleep();
    rainbow.stop()
}
await welcome()


const answers : {
    sentence:string
} = await inquirer.prompt([{
    name:'sentence',
    type:'input',
    message:"Enter your sentence to count the word = "
}])

const words = answers.sentence.trim().split(" ")
console.log(chalk.bgGreenBright(`Your sentence word count is ${words.length}.`))