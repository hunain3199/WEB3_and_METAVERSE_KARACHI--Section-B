#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow('Lets start guessing number');
    await sleep();
    rainbow.stop();
}
await welcome();
async function randomnumberguess() {
    const sysgenerated_number = Math.floor(Math.random() * 10);
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'userguess',
            message: 'Kindly enter your number: '
        }
    ]);
    console.log(answers.userguess);
    if (answers.userguess === sysgenerated_number) {
        console.log(chalk.bgBlue('Yeahoo you have guessed a correct number'));
    }
    else {
        console.log(chalk.bgRed('You have failed to guess correct number'));
    }
}
randomnumberguess();
