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
    let rainbow = chalkAnimation.rainbow('Lets start calculation')
    await sleep();
    rainbow.stop()
    console.log(chalk.magentaBright(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    
    
    `))
    
}
await welcome()

async function askQuestion() {
    await inquirer
  .prompt([
    {
        type:"list",
        name:"operator",
        message:"Which operation you want to perform? \n",
        choices:["Addition","Subtraction","Multiplication","Division","Power"]

    },
    {
        type:"number",
        name:"First_Number",
        message:"Enter First Number: "
    },
    {
        type:"number",
        name:"Second_Number",
        message:"Enter Second Number: "
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
        if(answers.operator == "Addition"){
            console.log(chalk.bgRedBright(`${answers.First_Number} + ${answers.Second_Number} = ${answers.First_Number + answers.Second_Number}`))
        }
        else if(answers.operator == "Subtraction"){
            console.log(chalk.bgCyan(`${answers.First_Number} - ${answers.Second_Number} = ${answers.First_Number - answers.Second_Number}`))
        }
        else if(answers.operator == "Multiplication"){
            console.log(chalk.bgBlue(`${answers.First_Number} * ${answers.Second_Number} = ${answers.First_Number * answers.Second_Number}`))
        }
        else if(answers.operator == "Division"){
            console.log(chalk.bgYellow(`${answers.First_Number} / ${answers.Second_Number} = ${answers.First_Number / answers.Second_Number}`))
        }
        else if(answers.operator == "Power"){
            console.log(chalk.bgGreenBright(`${answers.First_Number} ** ${answers.Second_Number} = ${answers.First_Number ** answers.Second_Number}`))
        }
        
  }) 
  };

  

  async function restart(){
    do{
        await askQuestion()
    var restart_again = await inquirer.prompt({
        type:"input",
        name:"restart",
        message:"Do you want to continue? yes or no: "
    })
}while(restart_again.restart == "y" || restart_again.restart == "YES" || restart_again.restart == "yes" || restart_again.restart == "Y" || restart_again.restart == "Yes")
  }

  restart();
  













