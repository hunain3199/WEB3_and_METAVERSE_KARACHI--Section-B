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
    let rainbow = chalkAnimation.rainbow(`/\\ ~|~ |\\/|   |\\/| /\\ ( |-| | |\\| [- `);
    await sleep();
    rainbow.stop();
}
await welcome();
let Input = {
    User_ID: String,
    Pin: Number,
    Account_Type: String,
    Options: String,
    Cash_Amount: Number,
    Balance: Number,
    Cash_Withdraw: Number
} = await inquirer.prompt([
    {
        type: "string",
        name: "User_ID",
        message: chalk.bgBlue("Insert your User Id to proceed further: ")
    },
    {
        type: "number",
        name: "Pin",
        message: chalk.bgGreen("Kindly insert your Pin to proceed further: "),
        when(answers) {
            return answers.User_ID;
        },
    },
    {
        type: "list",
        name: "Account_Type",
        message: "Choose Account Type: ",
        choices: ["Current_Account", "Saving_Account"],
        when(answers) {
            return answers.Pin;
        },
    },
    {
        type: "list",
        name: "Options",
        message: "Choose the options given below: ",
        choices: ["Fast Cash", "Balance Inquiry", "Cash Withdrawal"],
        when(answers) {
            return answers.Account_Type;
        },
    },
    {
        type: "number",
        name: "Balance",
        message: chalk.bgMagenta("Your current balance is "),
        when(answers) {
            return answers.Options;
        },
    },
    {
        type: "list",
        name: "Cash_Amount",
        message: "Choose the amount to proceed further: ",
        choices: [2500, 5000, 7500, 10000],
        when(answers) {
            return answers.Options === "Fast Cash";
        },
    },
    {
        type: "number",
        name: "Cash_Withdraw",
        message: chalk.bgYellow("Enter Amount: "),
        when(answers) {
            return answers.Options === "Cash Withdrawal";
        },
    },
]);
// console.log(Input.User_ID,Input.Pin,Input.Account_Type,Input.Options)
// if(Input.User_ID && Input.Pin && Input.Cash_Amount){
//     if(Input.Balance > Input.Cash_Amount){
//             let deduct_balance = Input.Balance - Input.Cash_Amount
//             console.log(`Balance after deduction is ${deduct_balance}`)
//     }       
//     else{
//         console.log("Insufficient Balance")
//     }
// }
if (Input.User_ID && Input.Pin && Input.Cash_Amount) {
    if (Input.Balance > Input.Cash_Amount) {
        let deduct_balance = Input.Balance - Input.Cash_Amount;
        console.log(`Balance after deduction is ${deduct_balance}`);
    }
    else {
        console.log("Insufficient Balance");
    }
}
else if (Input.User_ID && Input.Pin && Input.Cash_Withdraw) {
    if (Input.Balance > Input.Cash_Withdraw) {
        let deduct_balance = Input.Balance - Input.Cash_Withdraw;
        console.log(`Balance after deduction is ${deduct_balance}`);
    }
    else {
        console.log("Insufficient Balance");
    }
}
