import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const confirmNumberValidator = async (input) => {
    if (!/^\d+$/.test(input)) {
        return 'Please enter a valid number';
    }
    return true;
};
let operation = '';
console.log(chalk.greenBright(`
                      888                888        888                   
                      888                888        888                   
                      888                888        888                   
      .d8888b 8888b. 888 .d8888b888  888888 8888b. 888888 .d88b. 888d888 
      d88P"       "88b888d88P"   888  888888    "88b888   d88""88b888P"   
      888     .d888888888888     888  888888.d888888888   888  888888     
      Y88b.   888  888888Y88b.   Y88b 888888888  888Y88b. Y88..88P888     
      "Y8888P"Y888888888 "Y8888P "Y88888888"Y888888 "Y888 "Y88P" 888   
`));
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
const welcome = async () => {
    let rainbowColor = chalkAnimation.rainbow('Welcome to Aezaz Custom build Calculator');
    await sleep();
    rainbowColor.stop();
};
await welcome();
const addTwoNumber = async () => {
    let numberOne = 0;
    let numberTwo = 0;
    await inquirer.prompt([
        {
            name: 'number1',
            type: 'number',
            message: 'Enter first Number',
            validate: confirmNumberValidator
        }
    ]).then((answer) => {
        numberOne = Number(answer.number1);
    });
    await inquirer.prompt([
        {
            name: 'number2',
            type: 'number',
            message: 'Enter second Number',
            validate: confirmNumberValidator
        }
    ]).then((answer) => {
        numberTwo = Number(answer.number2);
    });
    console.log(`Addition : ${numberOne} + ${numberTwo} =  ${numberOne + numberTwo}`);
    operationHandler();
};
const MulTwoNumber = async () => {
    let numberOne = 0;
    let numberTwo = 0;
    await inquirer.prompt([
        {
            name: 'number1',
            type: 'number',
            message: 'Enter first Number',
            validate: confirmNumberValidator
        }
    ]).then((answer) => {
        numberOne = Number(answer.number1);
    });
    await inquirer.prompt([
        {
            name: 'number2',
            type: 'number',
            message: 'Enter second Number',
            validate: confirmNumberValidator
        }
    ]).then((answer) => {
        numberTwo = Number(answer.number2);
    });
    console.log(`Multiplication : ${numberOne} * ${numberTwo} =  ${numberOne * numberTwo}`);
    operationHandler();
};
const DivideTwoNumber = async () => {
    let numberOne = 0;
    let numberTwo = 0;
    await inquirer.prompt([
        {
            name: 'number1',
            type: 'number',
            message: 'Enter first Number',
            validate: confirmNumberValidator
        }
    ]).then((answer) => {
        numberOne = Number(answer.number1);
    });
    await inquirer.prompt([
        {
            name: 'number2',
            type: 'number',
            message: 'Enter second Number',
            validate: confirmNumberValidator
        }
    ]).then((answer) => {
        numberTwo = Number(answer.number2);
    });
    console.log(`Division : ${numberOne} / ${numberTwo} =  ${numberOne / numberTwo}`);
    operationHandler();
};
const SubtractTwoNumber = async () => {
    let numberOne = 0;
    let numberTwo = 0;
    await inquirer.prompt([
        {
            name: 'number1',
            type: 'number',
            message: 'Enter first Number',
            validate: confirmNumberValidator
        }
    ]).then((answer) => {
        numberOne = Number(answer.number1);
    });
    await inquirer.prompt([
        {
            name: 'number2',
            type: 'number',
            message: 'Enter second Number',
            validate: confirmNumberValidator
        }
    ]).then((answer) => {
        numberTwo = Number(answer.number2);
    });
    console.log(`Subtraction : ${numberOne} - ${numberTwo} =  ${numberOne - numberTwo}`);
    operationHandler();
};
const operationHandler = async () => {
    await inquirer.prompt([{
            name: 'operation',
            type: 'list',
            message: '\nWhat operation you want to perform?',
            choices: ['Add', 'Multiply', 'Divide', 'Subtract', 'Exit'],
        }])
        .then((answer) => {
        operation = answer.operation;
        switch (operation) {
            case 'Add':
                addTwoNumber();
                break;
            case 'Multiply':
                MulTwoNumber();
                break;
            case 'Divide':
                DivideTwoNumber();
                break;
            case 'Subtract':
                SubtractTwoNumber();
                break;
            default: break;
        }
    });
};
operationHandler();
