import inquirer from "inquirer";
let balance = 10000;
let pin = 1234;
const enterPin = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your pin",
    },
]);
if (enterPin.pin === pin) {
    console.log("Correct pin!!!");
    const operations = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "What do you want to do?",
            choices: ["Fastcash", "Withdraw", "Balance"],
        },
    ]);
    if (operations.options === "Withdraw") {
        const withdrawAmount = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter the amount you want to withdraw",
            },
        ]);
        if (withdrawAmount.withdraw > balance) {
            console.log("Insufficient Balance");
        }
        else
            balance -= withdrawAmount.withdraw;
        console.log(`You remaining balance is "${balance}" pkr`);
    }
    else if (operations.options === "Fastcash") {
        const fastCash = await inquirer.prompt([
            {
                name: "Fast",
                type: "list",
                message: "Enter the amount you want to withdraw",
                choices: ["100", "200", "500", "1000", "2000", "5000", "10000"],
            },
        ]);
        balance -= fastCash.Fast;
        console.log(`You remaining balance is "${balance}" pkr`);
    }
    else if (operations.options === "Balance") {
        console.log(balance);
    }
}
else
    console.log("Invalid pin");
